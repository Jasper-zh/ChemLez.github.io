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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","37fe42dff531f76fdc39ee1ebc7ed5ac"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","f8d4324fb5350d7364e5b012cf5fa67d"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","2d8a4b9f886ae5815fcd6c2826e4aed7"],["2020/01/22/云端MySQL安装及相关配置/index.html","6f12eddb596c100ef1f69e06c2a41b08"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","76c69e9d42775afc69030e7bb856c7dc"],["404.html","3632ae98383df2d85abcb62ad5720e81"],["about/index.html","6e112d6fb9763a55fdd3b9d83f09f98f"],["archives/2019/08/index.html","a2909f88a11b1eef2cd50069a1382e0e"],["archives/2019/10/index.html","a0294402d6aee647cbf3819c7285d7c3"],["archives/2019/index.html","e256e3b8a310e063c2db906c155d25b1"],["archives/2020/01/index.html","26564d3ac3004ae9f04844a151ff673c"],["archives/2020/02/index.html","8dc5265010832766a15ee769b80f323a"],["archives/2020/index.html","7330c7a647656cd469cf3de53e34f7a7"],["archives/index.html","816bfcd709c8899177940e0b431cc343"],["assets/img/1.png","e7683b4654a1eeaa93e4f1d080247fe6"],["assets/img/2.jpg","3ac15a506b9601f3ed77592fac42c914"],["assets/img/3.jpg","3a450a0b07dfa15dc6f2c9f0ce3020d0"],["assets/img/4.jpg","9ba1abf5622da9c4543951cdad007e3b"],["assets/img/5.jpg","2827e272da5e91409fe91de5b561e159"],["assets/img/6.jpg","a6cee9d6c29c297b57a5a57546e5f876"],["assets/img/7.jpg","1f882046259b0f92e7fe3eeaacc91c24"],["assets/img/8.jpg","b2c8cd2dd717e09b0e600166f3c39c54"],["assets/img/alipay.jpg","aab8fc7db55f5a3861de0da13d86568c"],["assets/img/avatar.jpg","1df8716870f1e5afb065747a03cad55d"],["assets/img/empty.png","c197f95b56f4591722df0e972fb33ef4"],["assets/img/f5.jpg","ceab3277832a68700d9c721a983197e0"],["assets/img/f7.jpg","ae79aa73f9e330072a7fb451d6ad2453"],["assets/img/favicon.jpg","c0e37ccb991859f7cd096ee0b606f89c"],["assets/img/weixin.jpg","785e25a6375f2346e6bf59d7b5068002"],["categories/Linux/index.html","1771aa1577bea6e7de5a101d587902bf"],["categories/Machine-Learning/index.html","b4b7bef1ece70d35734166962062e1bf"],["categories/Python/index.html","0c49006f03c3c56160c30038f10d2f94"],["categories/index.html","b6832fc1243b2e407d6ef2a0c270e6e3"],["css/style.css","8d39d9483316e8d55e2591f2962525e4"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","5cdb662a942224cec0c4f8d842332b0b"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","e5ebf863ce04627cb4787d2a4e575432"],["js/app.js","dd505eb15f9e26775c63009e8605e3b2"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","4a7b30053908dab852ff840ae8ff6d5c"],["mylist/index.html","4ff626bc6ee866344a18afba9f58d2fe"],["photos/index.html","b5fd28dce06c75af77735001bbc811ef"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","84ebedcffb4f2ac0f21819c6634699f9"],["tags/DecisionTree/index.html","8b85659cc8527cbc80116a692772bca6"],["tags/Kaggle/index.html","9b0312a0c4c0a68f56c1422c50d71215"],["tags/Linux/index.html","f74e48f69f6b4178623b35928518548e"],["tags/MySQL/index.html","49c3c100b3b3ef1e9f3428d7399c3867"],["tags/Python/index.html","ef75f8e456478ab209a29e0ca1a87601"],["tags/VMware/index.html","02c5bda389a11e6712a6b3551834181d"],["tags/hexo/index.html","0c11a396c093e764efe4ab02ba0a7e2e"],["tags/index.html","264ef799d29729840f9472d13877064f"]];
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







