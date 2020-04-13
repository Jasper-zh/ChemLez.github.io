/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","ce507b9c6b00eabe8161047b79543c3b"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","3f5de8fb3969eec3f00fd683008aa299"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","aeb4a3980a5286be783ea75e0ca44c22"],["2020/01/22/云端MySQL安装及相关配置/index.html","345a8191f7495e2ade12a380e64c7292"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","77faf54153781bc73bf28fb49c271851"],["2020/03/18/JDBC基础使用/index.html","2b1d5ed5ff2ee1c3f4c9de544602764a"],["2020/03/18/Python爬虫基础入门/index.html","d980ae13cbb42f7ed95ab0622e2843f9"],["2020/03/21/抽取JDBC工具类——JDBCUtils的使用/index.html","d6f5569f62b74f5ca6e6cd0f0cb20156"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","f0af3729438c056fb94a4d6b4d21cdbf"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","46b1ae91b19039a1e6dc62bb753a79da"],["404.html","8994a83cd9c9cb427940b3600708d844"],["about/index.html","ed504e210c4b61a5221cbd42fb8f5b3f"],["archives/2019/08/index.html","7789809fe64ad75a8a946855f7577622"],["archives/2019/10/index.html","a1e6e64ede306497c07268753d3f1227"],["archives/2019/index.html","96a9525aca93c6ce8ce0fb855060b125"],["archives/2020/01/index.html","980158cc46ac7e04654663913c1f4751"],["archives/2020/02/index.html","e5a5cba6d1798f26b7437ad2c8beff6a"],["archives/2020/03/index.html","43e8d5ccc4bf2291aecd6cf6b150fe2d"],["archives/2020/04/index.html","457a5ecb16cf2fd9726e898244ff8ca2"],["archives/2020/index.html","4233b95f8d7bf1064d7f062dbfddfc75"],["archives/index.html","1fcd83f8f6e5a86f49b67822f647c213"],["categories/Java/index.html","386a494592d6b397e912d74256b986ca"],["categories/Linux/index.html","f02015b8dd96ebbdd962d2c2053fa973"],["categories/Machine-Learning/index.html","5aeecc1b972bde977836a80db8f2590e"],["categories/Machine-Learning/sklearn/index.html","150a75522d1ab6044ac5572ddef7d85b"],["categories/Python/index.html","d63e67ac31f0f3da7ae1b68acbd6c397"],["categories/Python/爬虫/index.html","e84d2e6e2dc342b00b79c7d1ac7ad051"],["categories/index.html","2346471f97755eaf8cfbee8cfa8c9571"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","42ffafb96e82deac07dcbb3960d32299"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","8ca7e37b8c17c26f30099e09222ed03a"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","8688a5fe0bd818da9e894f85e222c24b"],["photos/index.html","8fa333a49695fa01900ebcf8c10a9cd2"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","67fc100c0c793e70f8b06f1ff99084ba"],["tags/Beautifulsoup/index.html","cc14d29ae4dc694bc5dcf735d5b8a223"],["tags/Data-Preprocessing/index.html","5a425c3396f62fb8d73704012460762b"],["tags/DecisionTree/index.html","f8fce5a4e239bf978d43e883757926c0"],["tags/Feature-Engineering/index.html","9f40cf77459ce062ae72ef3fc9f194ca"],["tags/JDBC/index.html","4989f705ba9bf9e9988e12b93461a7ba"],["tags/Java/index.html","71943bba21a622a355e0f7617315c702"],["tags/Kaggle/index.html","595e5a4417ccefa09d7effe79f964b33"],["tags/Linux/index.html","e19324db564d70db708748de8f0e26dc"],["tags/MySQL/index.html","7f75cdde184531c6eb73169c38adfd69"],["tags/Python/index.html","7eb3eb5f58fe564e52820f07035eaa5f"],["tags/Request/index.html","a51a4566e481316c29c8da8bc529b4ee"],["tags/VMware/index.html","78c5e3b5411d9c585fd06d5cabb85db2"],["tags/hexo/index.html","6b8937d4111b0aa9b43fd688bc236c66"],["tags/index.html","fa41fdcb569e4cf4853bb294f9f5325d"],["tags/sklearn/index.html","1b2aff40626b2b79c6ed4986d97299a6"],["tags/正则表达式/index.html","225288d4d49f254634448c23a45f2292"],["tags/爬虫/index.html","99f0cbc1ed27b77316fdd7bde7f95d3e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







