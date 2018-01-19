/*
 * Copyright 2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const path = require('path');

module.exports.secondLastFolder = (filePath, url) => {
    const parts = filePath.split(path.sep);
    if (parts.length >= 3) {
        return parts[parts.length - 3];
    } else {
        return null;
    }
};

/**
 * @param {?string} name
 * @return {?function}
 */
module.exports.nameToFunction = (name) => {
    if (!name) {
        return null;
    }
    switch (name) {
        case 'secondLastFolder':
            return module.exports.secondLastFolder;
        default:
            throw new Error('Unknown folder function: ' + name);
    }
};