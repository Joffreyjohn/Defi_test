
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/project"
  },
  {
    "renderMode": 2,
    "route": "/training_plan"
  },
  {
    "renderMode": 2,
    "route": "/realtime_data"
  },
  {
    "renderMode": 2,
    "route": "/thermal_renovation"
  },
  {
    "renderMode": 2,
    "route": "/quote"
  },
  {
    "renderMode": 2,
    "route": "/traitement"
  },
  {
    "renderMode": 2,
    "route": "/models_3D"
  },
  {
    "renderMode": 2,
    "route": "/maintain_10"
  },
  {
    "renderMode": 2,
    "route": "/maintain_50"
  },
  {
    "renderMode": 2,
    "route": "/esperancy"
  },
  {
    "renderMode": 2,
    "route": "/diagnosis"
  },
  {
    "renderMode": 2,
    "route": "/BIM_data"
  },
  {
    "renderMode": 2,
    "route": "/anomalies"
  },
  {
    "renderMode": 2,
    "route": "/acv"
  },
  {
    "renderMode": 2,
    "route": "/immediate"
  },
  {
    "renderMode": 2,
    "route": "/next_10"
  },
  {
    "renderMode": 2,
    "route": "/next_50"
  }
],
  assets: {
    'index.csr.html': {size: 495, hash: 'f5791558ff20be58835ea8e6757b25188b0ff1a3fdc372125aa720ac8c21957a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '5e1bf25d1c1ce99dc705fd9dfc0c97c4e40d2042e84de2fb54dc77a03b07deaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 761, hash: '0d4d0fe4797939d0f687011846b505e33e3d84e3f1063cbec80488151b4e73c8', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 755, hash: '5337b78304f6d9eeceaf91a658630da0624c3a751c54e809cdab2aec089f825e', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'realtime_data/index.html': {size: 771, hash: '93761b27d4f338e87fed7f3c66c91a95bde035e6fbf6e24af28f3f0fc83ef3c8', text: () => import('./assets-chunks/realtime_data_index_html.mjs').then(m => m.default)},
    'thermal_renovation/index.html': {size: 787, hash: '8e025df03c72c12d587e6a0fb2631b3cc4f8d01fec850b41a853db4dffb9b67e', text: () => import('./assets-chunks/thermal_renovation_index_html.mjs').then(m => m.default)},
    'quote/index.html': {size: 763, hash: 'd09ef5c26dc552a737661222941b1ac331f3bca72a24c2a2de3a294621097995', text: () => import('./assets-chunks/quote_index_html.mjs').then(m => m.default)},
    'traitement/index.html': {size: 763, hash: '223774c98122187620e78b77bdeb8e0f922d522c97603e0610c792044d535c35', text: () => import('./assets-chunks/traitement_index_html.mjs').then(m => m.default)},
    'training_plan/index.html': {size: 774, hash: 'e142ac10eff7759f6fee8978a0a42357a7325bc9073e54bf39b286d9f83b16a4', text: () => import('./assets-chunks/training_plan_index_html.mjs').then(m => m.default)},
    'models_3D/index.html': {size: 763, hash: '021528d5fa85de897c6b555414f583b7b4ac0f7a45cae9fab1a5919a123b02ff', text: () => import('./assets-chunks/models_3D_index_html.mjs').then(m => m.default)},
    'maintain_10/index.html': {size: 766, hash: '700a84945f7f391a83348d1312a69d8182b0f61a1be99e6e19288b92a7a4e0ae', text: () => import('./assets-chunks/maintain_10_index_html.mjs').then(m => m.default)},
    'esperancy/index.html': {size: 760, hash: '584c2fecc80f8c416bad023a5c54f4c58c5cbe4efb4055ac1de511d3eff7ea1f', text: () => import('./assets-chunks/esperancy_index_html.mjs').then(m => m.default)},
    'maintain_50/index.html': {size: 765, hash: 'f35c0aa371887020a028f228ea84b0422d9ca1da153dd0e4462279de246c89ae', text: () => import('./assets-chunks/maintain_50_index_html.mjs').then(m => m.default)},
    'diagnosis/index.html': {size: 760, hash: '2d14c7796c9acfd18e3aae7d72d17ec2ca97e1505df92de2a170d35449ae3379', text: () => import('./assets-chunks/diagnosis_index_html.mjs').then(m => m.default)},
    'BIM_data/index.html': {size: 757, hash: 'f856f15d8480de11a53f43e4629471c2065dbd668f44af60096dcc546987980b', text: () => import('./assets-chunks/BIM_data_index_html.mjs').then(m => m.default)},
    'anomalies/index.html': {size: 759, hash: '871947e541d21e51033c0e3c42c2e6b652584a3d29e2f4518093cd0d17967bb5', text: () => import('./assets-chunks/anomalies_index_html.mjs').then(m => m.default)},
    'acv/index.html': {size: 742, hash: 'bc64e19d2f28ff7823f782986adb978533bb7ad69b64520d791335ecf08690f3', text: () => import('./assets-chunks/acv_index_html.mjs').then(m => m.default)},
    'immediate/index.html': {size: 760, hash: 'ff9f929b7f2fc4d28800d1a819965b46e4a99abddb6074a27d6e1c17f693eef8', text: () => import('./assets-chunks/immediate_index_html.mjs').then(m => m.default)},
    'next_10/index.html': {size: 754, hash: '5189330dffcd8e660930341ad6ae7da956f69cf3034a36c69aa96fe203640971', text: () => import('./assets-chunks/next_10_index_html.mjs').then(m => m.default)},
    'next_50/index.html': {size: 754, hash: 'f4b871a8bb9b3d4e5b5b052060f3e8de4f45d7b5aea7e6cfe59889b958c36095', text: () => import('./assets-chunks/next_50_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6259, hash: '31cfa2cbf6569f03e80d6837d8d4ac4271e663c48633dfb4ac8435f84c57086d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
