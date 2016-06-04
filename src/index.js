var $pages=$('#C_pages');
$pages.snapscroll({
	scrollThreshold:10
});
$pages.on('start:scroll',function(e,curIndex,newIndex,direction){
	console.info('start'.curIndex,newIndex,direction);
})
.on('done:scroll',function(e,newIndex,direction){
	console.info('done event',newIndex,direction)
})
