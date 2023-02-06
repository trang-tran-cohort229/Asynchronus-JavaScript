self.addEventListener('message', function(e){
    let data = e.data;
    let processedData = processImage(data);
    this.self.postMessage(processedData)
})
function processImage(data){
    return 'Image Processed';
}