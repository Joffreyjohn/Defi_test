import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as fs from 'fs';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-idt',
  templateUrl: './idt.component.html',
  styleUrls: ['./idt.component.css'],
})
export class IdtComponent implements OnInit {
  data: any[] = [];
  isLoading: boolean = false; 
  errorMessage: string | null = null;
  filtereddata: any[] = [];
  chart: any;


  async fetchData(): Promise<void> {
    const options = {
      method: 'GET',
      url: 'https://meteostat.p.rapidapi.com/point/hourly',
      params: {
        lat: '50.6292',
        lon: '3.0573',
        start: '2023-01-01',
        end: '2023-12-31',
        alt: '20',
      },
      headers: {
        'x-rapidapi-key': '638c55ab05msh8cbe087feda0320p1af55fjsnc0557ed4476b',
        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
      },
    };

    this.isLoading = true;
    try {
      const response = await axios.request(options);
      this.data = response.data.data;
      this.filtereddata = [...this.data];
      this.createChart(this.filtereddata);
      const csv =
        'time,temperature,humidity,pressure,wind_speed\n' +
        this.data
          .map(
            (row) =>
              `${row.time},${row.temperature},${row.humidity},${row.pressure},${row.wind_speed}`
          )
          .join('\n');
      fs.writeFileSync('data.csv', csv);
      console.log('CSV généré avec succès.');
      console.log('Données reçues pour Lille:', this.data);
    } catch (error) {
      console.error(error);
      this.errorMessage =
        'Une erreur est survenue lors de la récupération des données.';
    } finally {
      this.isLoading = false;
    }
  }

  createChart(filteredData: any[]): void {
    if (this.chart) this.chart.destroy();

    const labels = filteredData.map((d) => d.time);
    const temperature = filteredData.map((d) => d.temperature);
    const co2 = filteredData.map((d) => d.co2); // Taux de CO2

    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Température extérieure (°C)',
            data: temperature,
            borderColor: 'blue',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Taux de CO₂ (ppm)',
            data: co2,
            borderColor: 'green',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          x: {
            title: { display: true, text: 'Temps' },
          },
          y: {
            title: { display: true, text: 'Valeurs' },
          },
        },
      },
    });
  }

  filterData(days: number): void {
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - days);

    this.filtereddata = this.data.filter((d) => {
      const date = new Date(d.time);
      return date >= startDate && date <= now;
    });

    this.createChart(this.filtereddata);
  }

  ngOnInit(): void {
    this.fetchData(); // Appelle fetchData au chargement du composant
  }
}
