const buildUrl = 'Build';
const loaderUrl = buildUrl + '/barbarian_bg_vk.loader.js';

const instanceConfig = {
    dataUrl: buildUrl + '/barbarian_bg_vk.data',
    frameworkUrl: buildUrl + '/barbarian_bg_vk.framework.js',
    
    codeUrl: buildUrl + '/barbarian_bg_vk.wasm',
    
    
    
    streamingAssetsUrl: 'StreamingAssets',
    companyName: "DefaultCompany",
    productName: "WebVkAuth",
    productVersion: "0.1",
    showBanner: () => {}
}

const onWindowLoaded = () => {
    const loadingProgress = new progressBar('loading-progress');
    const gameCanvas = document.getElementById('game-canvas');
    const loaderScript = document.createElement('script');
    
    loaderScript.src = loaderUrl;
    loadingProgress.setMax(1);
    loadingProgress.show();
    
    loaderScript.onload = () => {
        createUnityInstance(gameCanvas, instanceConfig, (progress) => loadingProgress.setCurrent(progress))
            .then((unityInstance) => {
                loadingProgress.hide();
            })
            .catch((msg) => {
                alert(msg);
            });
    }
    
    document.body.appendChild(loaderScript);
}

window.onload = onWindowLoaded;
