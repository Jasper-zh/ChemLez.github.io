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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","fc5f4ad52bebc5cdd18d4f4a709a0f95"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","7a7f6639c5144309776d03997d737c33"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","bceb93d5c08e4a82da2cb09e7ccccb14"],["2020/01/22/云端MySQL安装及相关配置/index.html","4eb960e77b7d8f06a259f2199610e1d5"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","2942c7c9d48b52d2d5c93eb353a7bfa2"],["2020/03/18/JDBC基础使用/index.html","c382ce4f23215c80199253d3155969a3"],["2020/03/18/Python爬虫基础入门/index.html","0326b6836d79f10ce34ade3120ab5ea8"],["2020/03/21/抽取JDBC工具类——JDBCUtils的使用/index.html","572c23e2414ec555f62214d33ec0c5de"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","f548c582529367b6bf14b1fa8b48a331"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","fc458214e55f7ef5bbf34bd4b78f818d"],["404.html","2fc546d9019425b6fbdcf06dd8d3b461"],["about/index.html","61acca75c3866173dc15396fc973f266"],["archives/2019/08/index.html","c5b39516ba3956d0a2356f04050e6f33"],["archives/2019/10/index.html","6ad04198d6eabab9b37e25fbdee5c34f"],["archives/2019/index.html","747fa5e52904fe071ade9977223d1bfc"],["archives/2020/01/index.html","f9ebc6392d1a93098042cb74025dad95"],["archives/2020/02/index.html","cabcaef9a47affe25c730f7e79c9aded"],["archives/2020/03/index.html","fe9c4df57d515f90855dc0b00f227bc9"],["archives/2020/04/index.html","8c252d45d28e734c1eed9c6cf1155b65"],["archives/2020/index.html","3b7134ff6fd678a06c85a6c9a2993bb1"],["archives/index.html","d053b0105967b3c81d1b5ede2118c896"],["categories/Java/index.html","d3f593187a964773fc70d9a7ebf69a96"],["categories/Linux/index.html","d0d7e0fbdf8c6f3eff8cfd13da1834d5"],["categories/Machine-Learning/index.html","736ff63814e449e5b18d42f7ed7f4175"],["categories/Machine-Learning/sklearn/index.html","4422919280811abd3a21b286c2ffd816"],["categories/Python/index.html","dbd25358d7e6938170325bd0ad077d19"],["categories/Python/爬虫/index.html","109ea4f07b5993e503fb24abe9530f76"],["categories/index.html","8880b40cc69d2838e5e78a375d88437a"],["css/style.css","94f640db87222561ebf815f45e1779e5"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","16beb03dede13ba891e46fef00f14e5f"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","a1b093edacae56aa6be5213c450f2429"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","0288e14ce685619c5ae35731d9113279"],["photos/index.html","749345110696fba809dc90ed5343e250"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","e92df03ecbaf0550c262bcfab29a61a4"],["tags/Beautifulsoup/index.html","a67c46f36add1fd0e9df3aeb21c8e94a"],["tags/Data-Preprocessing/index.html","c9af7eb78d39b84c3d095b0ed620b8b6"],["tags/DecisionTree/index.html","84082f0e37000038353b529df64b6ec3"],["tags/Feature-Engineering/index.html","c29ad0c8d2c0d9cc59caba869cdf0b7e"],["tags/JDBC/index.html","622b0bf1f897c5be4f0a1839b083a5d1"],["tags/Java/index.html","831bfed2e033a81911dc6531fe7ae142"],["tags/Kaggle/index.html","f8320923cd630d09c436bb652f35246e"],["tags/Linux/index.html","5a3a2f24d80a2e02154ff82e04532e5e"],["tags/MySQL/index.html","56e14977f75a4457203ff30b69641498"],["tags/Python/index.html","30abdc15138fb0ce65d56c258052ab7b"],["tags/Request/index.html","46f52dcb0fec56c7ada13b062167bd42"],["tags/VMware/index.html","c7b9644a4b968dece3577b13cfac8d79"],["tags/hexo/index.html","8541b80aeb1ae554cadad11a8002bddd"],["tags/index.html","caa5e73bf0d17fe75bafd4c89635abb3"],["tags/sklearn/index.html","a41eb4733e16171b974130d94e1bc9ae"],["tags/正则表达式/index.html","320d6d2cbc94ff034973eda06b88fd6d"],["tags/爬虫/index.html","36d6ca5ebda6891eb28cde1faca2e5c6"]];
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







