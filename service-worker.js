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

var precacheConfig = [["2019/08/28/hexo-yilia-主题添加相册功能/index.html","fad9c3484aa721ac10cf70327b65de58"],["2019/10/22/序列之深拷贝-浅拷贝/index.html","4d25a1dcc99854800b3a644b2548d8bd"],["2020/01/17/Linux-Ubuntu的安装与相关设置/index.html","e39c36d87733831bf029c59ed7646d9a"],["2020/01/22/云端MySQL安装及相关配置/index.html","37602446432892d46238b37185a0e1f6"],["2020/02/09/机器学习-决策树入门之泰坦尼克号案例/index.html","eb098faffedb4e3ecb8cb6faaf57dd6e"],["2020/03/18/JDBC基础使用/index.html","96599c05298b3beccb42d45ae10e01f4"],["2020/03/18/Python爬虫基础入门/index.html","cf88b1075a878cf7072b5463ec3e0c4c"],["2020/03/21/抽取JDBC工具类——JDBCUtils的使用/index.html","ff7d840e1abbd704735e9f63b6a9457c"],["2020/04/05/机器学习-特征工程之数据预处理/index.html","db4739a14a40cd72a566e640aa93bd71"],["2020/04/09/对小木虫考研调剂信息的爬取/index.html","125c4e8dd217a12c076aa5de0808684a"],["2020/05/27/conda常用命令/index.html","60d73874f304623a47426faaafa58746"],["404.html","8994a83cd9c9cb427940b3600708d844"],["about/index.html","ed504e210c4b61a5221cbd42fb8f5b3f"],["archives/2019/08/index.html","8064a372ef29cabe81aaae1798c7fa20"],["archives/2019/10/index.html","54a7c2cdb6a801ee123e5cbffb6e5c76"],["archives/2019/index.html","69dd65716de8f86a375ae93e823df494"],["archives/2020/01/index.html","309fef870aa6ed329b37d58a6d0a52b8"],["archives/2020/02/index.html","6d5950b2917149dda358794852c63789"],["archives/2020/03/index.html","a1b2d496bfdcab0c4f7d2fe9660f3a29"],["archives/2020/04/index.html","de2e41e8d287336778f49b98e9ec1297"],["archives/2020/05/index.html","76e1a2ac85ae97f19abe8d037ebbebdb"],["archives/2020/index.html","c0b72391556c6b78c15eba01b8ac33f3"],["archives/index.html","96804bfa564600d9fb343a22a899f005"],["archives/page/2/index.html","daf9a80bafbccfaee1502442cd410945"],["categories/Java/index.html","9cb40a9002d57b7148a980eed3c65de8"],["categories/Linux/index.html","0ba13da2e06ae0eb75f49d45a6149c25"],["categories/Machine-Learning/index.html","8e68d6365cad44ac8e0a5501cb2bd1ee"],["categories/Machine-Learning/sklearn/index.html","5dbc302cf375c24bb31dceab5c931980"],["categories/Python/index.html","509f4cdd72520c9afe86e0b7989d260d"],["categories/Python/爬虫/index.html","6145ef44c93d86a899487d2b5a4aca57"],["categories/index.html","b684ab4e8c42362dd948fcd278af629e"],["css/style.css","5e8e27d9eca2e29c4d0dc8477944d8c3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","03f2ba41ca4baab8173c45bbffcfba64"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["index.html","36c687b49b69623447ddd72c797dbfc8"],["js/app.js","eb92adb148bed642e61344377d9f4a1e"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","3bce14f73c199c7feb080dd58bc91e9c"],["mylist/index.html","1a8838a956a81ee45ae85f002d1712b6"],["page/2/index.html","e1469fa0abde0b87857d21f2b2fe546d"],["photos/index.html","f632b68487f7b77fbc3bc04f5b7b7e92"],["photos/ins.css","418d1404dfa61543abad139d9b979821"],["photos/ins.js","4d459bdde6b0b3ab1a31ee123afafb08"],["photos/lazyload.min.js","4a40c05da7019815a9dc74671848766e"],["photos/videos.html","544517b753dcb55a8c6b5b26c7a3599c"],["tags/Beautifulsoup/index.html","6456359de6137b8bcdbd3d02d828b524"],["tags/Data-Preprocessing/index.html","712c170eafcb4c5a75ad2bf74d3e8eef"],["tags/DecisionTree/index.html","5b87c926cd2f3a4cc8e35856066a7163"],["tags/Feature-Engineering/index.html","7fe2c948206d21d758aceec59e0b5e88"],["tags/JDBC/index.html","f6d7e9a1a3e9fefde4421c1eb526ac98"],["tags/Java/index.html","6757dba187f62dd2e03c1c624728ce8e"],["tags/Kaggle/index.html","cb521400438377d157ad5d0b3a07fd7a"],["tags/Linux/index.html","aac61c227e86dec6d2e4837803012332"],["tags/MySQL/index.html","f5b661519224edceb4ad4236a3612f2b"],["tags/Python/index.html","78e7c9ee0df9790cccc725e48756a64e"],["tags/Request/index.html","8066e16942caca9a395e131540da9e1e"],["tags/VMware/index.html","2b48ddc28434451eb916670e4c6e11ac"],["tags/conda/index.html","9681e85f95491a867cb9403d82b64f95"],["tags/hexo/index.html","38d39477e5632b4c72b31d44be404add"],["tags/index.html","854605cc7c2fb103c3e65f832bca77a4"],["tags/sklearn/index.html","873b1d7263784820f6385dfe61fccf7c"],["tags/正则表达式/index.html","12273237ec6db7d7dfd4c15adaf769b5"],["tags/爬虫/index.html","aa141271a54182747d1fa95ce4e6518a"]];
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







