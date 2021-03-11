/*
 * Copyright 2019 Lightbend Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const AkkaServerless = require("@lightbend/akkaserverless-javascript-sdk").AkkaServerless;
const server = new AkkaServerless();
const eventSourced = require("./eventsourced.js");
server.addComponent(eventSourced.tckModel);
server.addComponent(eventSourced.two);
const valueEntity = require("./value-entity.js");
server.addComponent(valueEntity.two);
// FIXME #124 passivation not supported yet
// server.addEntity(valueEntity.configured);
server.addComponent(valueEntity.tckModel);
server.start();