/*******************************************************************************
 * Copyright (c) 2022. BMW Group. All rights reserved.
 ******************************************************************************/

import * as AngularJson from '../../angular.json';

const host = AngularJson.projects['league-of-random'].architect.serve.options.host;
const port = AngularJson.projects['league-of-random'].architect.serve.options.port;
const path = AngularJson.projects['league-of-random'].architect.serve.options.servePath;

export const BASE_URL = `http://${host}:${port}${path}`;
