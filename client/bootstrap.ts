import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './main.module';

require('./app/common/styles/styles.scss');

require('font-awesome-sass-loader');

/* if (process.env.NODE_ENV === 'production') {
    enableProdMode();
} */

platformBrowserDynamic().bootstrapModule(AppModule);