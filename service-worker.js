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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","416883931e2ddf8b8f57f4e31f28a0d0"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","fdc67fb8a5f8ab6372f4266eef05b651"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","bf64439fc4e25d42645aac705e9f6cb7"],["2020/01/22/云端MySQL安装及相关配置/index.html","3d2d2a2b079497ec624d5260766e22ad"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","6156f80a10485aa71fef08d490fafd15"],["2020/03/18/JDBC基础使用/index.html","f82857690e973c71680127ba1b3f130a"],["2020/03/18/Python爬虫基础入门/index.html","ee31bfb8b58e91ccac407aa03fe78ffd"],["2020/03/21/抽取JDBC工具类——JDBCUtils的使用/index.html","614e8d01f97f52c785b1fa2154b4d879"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","a743db2df94d8710ae364e31714d80ba"],["404.html","2fc546d9019425b6fbdcf06dd8d3b461"],["about/index.html","61acca75c3866173dc15396fc973f266"],["archives/2019/08/index.html","0e6cd69dbf0091d470e7369160c73d4d"],["archives/2019/10/index.html","31af32e24bed3a0d33dd294d0ab0a997"],["archives/2019/index.html","2f1a533319aa5b0cf36f7022b5a31ecf"],["archives/2020/01/index.html","4e01714f183eb541599a1704544b9a78"],["archives/2020/02/index.html","d3df3e78f67d562362a379da507b2f05"],["archives/2020/03/index.html","ad75b81ff6b025b14d8f9bd71410921d"],["archives/2020/04/index.html","07ce676c00173f59fc90ca162cc2fa10"],["archives/2020/index.html","820cbff1ae09abbeb5574948f33463f4"],["archives/index.html","915bf406beb3262d8d79b81d085dae4a"],["categories/Java/index.html","d6526b9f50aadd6e1b7247fbafd1731a"],["categories/Linux/index.html","18db6a9c4f3685a68d78b8dac0680094"],["categories/Machine-Learning/index.html","49520f297592ea505ed7a1cfe2f5b7b9"],["categories/Machine-Learning/sklearn/index.html","6a43ec4052e70f7e49ee59a0ae679a48"],["categories/Python/index.html","61f2a0203791509221f0d437895e84f6"],["categories/Python/爬虫/index.html","ba8dc74ef1d7df59cb05b3e168e94a7f"],["categories/index.html","3892eebd5a1d471e90a38937acb9af09"],["css/style.css","94f640db87222561ebf815f45e1779e5"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","e63d59c6a330c3ac18099d01279539c1"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","61bdd90659a301fd0b81509ab3421fb9"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","b8eb4101680a5da9e503660bbb9edbd2"],["photos/index.html","0d9d8f9e465baea9189ccc2430cb5399"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","95dbba529f1b02124f661ce2aaa02537"],["tags/Beautifulsoup/index.html","0b87af5e15f31dee5d357f5b7b5ffa73"],["tags/Data-Preprocessing/index.html","6ee46f210ea1e9b345b11346c964581b"],["tags/DecisionTree/index.html","8ae46a4ef789163e31bc0721684503af"],["tags/Feature-Engineering/index.html","2678ffc0b51acf8b9c00773382ff81d5"],["tags/JDBC/index.html","abd5ed09c1b948bc9e6df5bd0a753e51"],["tags/Java/index.html","9b00271bb4271e4de24877eeef0bb08a"],["tags/Kaggle/index.html","7d6110e143269ef6562dfea1521269d2"],["tags/Linux/index.html","5fa93d87c1ac950f959270414c449158"],["tags/MySQL/index.html","d4ffd4c8bc800eb7e854f83dd647f2dd"],["tags/Python/index.html","738a61c745a62045ce7bc78c0a42360d"],["tags/Request/index.html","d6a3cbe62875326b7a80fff3ebd64fcc"],["tags/VMware/index.html","b31e542bc4b099ff4e37eadca5502eba"],["tags/hexo/index.html","692eca69955ea61e66da612fbe63130e"],["tags/index.html","2910bff7c8cdf30d3a452b0f03dc0f3e"],["tags/sklearn/index.html","9a999184d1f4b451d6eacca5656cb576"],["tags/正则表达式/index.html","4b825723aa545ff888f470c98c6b527f"],["tags/爬虫/index.html","199175023cc326504be078c4210356d7"]];
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







