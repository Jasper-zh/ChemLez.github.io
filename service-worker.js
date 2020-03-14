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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","fd7b22595b28e3b70f741898bce62b7a"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","4a0a9260f6c0714486fe95f49bae6fb7"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","f54ef3a10cf2e8601038c294605e32d4"],["2020/01/22/云端MySQL安装及相关配置/index.html","a575a19a28c7f190135d73a43d17d604"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","03058723e08559d77e31e8c163ae882c"],["404.html","f3e6f7efc429ecfe1db27e8313809803"],["about/index.html","4c511b9c28c78b4cbd670d6d1c10b2bc"],["archives/2019/08/index.html","6905479b25a13bc621d30edbb1879c14"],["archives/2019/10/index.html","68d14530e572c97b9183d7f481950711"],["archives/2019/index.html","09ab96859701a0a5abaae4e24d87d4c6"],["archives/2020/01/index.html","b82fe81d2179a42f22901424a7b2ce57"],["archives/2020/02/index.html","7adb63153b04b62ddc40c4b5d0385e8a"],["archives/2020/index.html","cb2e32bb5d2e9a463cd7dc0a848e8abe"],["archives/index.html","201acfbc1ce3057f7096534b96389cfa"],["assets/img/1.png","e7683b4654a1eeaa93e4f1d080247fe6"],["assets/img/2.jpg","3ac15a506b9601f3ed77592fac42c914"],["assets/img/3.jpg","3a450a0b07dfa15dc6f2c9f0ce3020d0"],["assets/img/4.jpg","9ba1abf5622da9c4543951cdad007e3b"],["assets/img/5.jpg","2827e272da5e91409fe91de5b561e159"],["assets/img/6.jpg","a6cee9d6c29c297b57a5a57546e5f876"],["assets/img/7.jpg","1f882046259b0f92e7fe3eeaacc91c24"],["assets/img/8.jpg","b2c8cd2dd717e09b0e600166f3c39c54"],["assets/img/alipay.jpg","aab8fc7db55f5a3861de0da13d86568c"],["assets/img/avatar.jpg","1df8716870f1e5afb065747a03cad55d"],["assets/img/empty.png","c197f95b56f4591722df0e972fb33ef4"],["assets/img/f5.jpg","ceab3277832a68700d9c721a983197e0"],["assets/img/f7.jpg","ae79aa73f9e330072a7fb451d6ad2453"],["assets/img/favicon.jpg","c0e37ccb991859f7cd096ee0b606f89c"],["assets/img/weixin.jpg","785e25a6375f2346e6bf59d7b5068002"],["categories/Linux/index.html","e8057d6e76fb97b5808bd5b367a7c68a"],["categories/Machine-Learning/index.html","7975215d4e6af0541054ab2c2bb77bb4"],["categories/Python/index.html","e3a0845179eb75568e9dd1722e2badbd"],["categories/index.html","bab7156c28d88ee26e70d71325885136"],["css/style.css","8d39d9483316e8d55e2591f2962525e4"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","2732145f8c64047e79f9d85bd2bd427a"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","1ad8ed2117f1418ed00c099c926ccf12"],["js/app.js","dd505eb15f9e26775c63009e8605e3b2"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","4a7b30053908dab852ff840ae8ff6d5c"],["mylist/index.html","1df0e4d6a10b697695751dabaa9c0ce8"],["photos/index.html","9223d6878b0aad1b253878bc0f49af1a"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","be64cf9a95bfff78059b421611e061c2"],["tags/DecisionTree/index.html","a13289afd65c2d453ab6b6afc32a602b"],["tags/Kaggle/index.html","4982895ec38eab1cf2ef2ae6c164c24c"],["tags/Linux/index.html","dc04593f83493bba006beec68484f196"],["tags/MySQL/index.html","da8cd830b1f198ac3aed0cd7e8c14c4f"],["tags/Python/index.html","573471ccd0a79c0722ed3643bff00879"],["tags/VMware/index.html","47cc55583d0932bda12aeab358c23583"],["tags/hexo/index.html","d7e978be4f9007937d60767a7614c48e"],["tags/index.html","de45fdc6e639660c8191bbb0604e591f"]];
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







