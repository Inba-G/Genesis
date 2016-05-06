/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('[data-toggle="collapse"]').on('click', function() {
    var $this = $(this),
            $parent = typeof $this.data('parent')!== 'undefined' ? $($this.data('parent')) : undefined;
    if($parent === undefined) { /* Just toggle my  */
        $this.find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        return true;
    }

    /* Open element will be close if parent !== undefined */
    var currentIcon = $this.find('.glyphicon');
    currentIcon.toggleClass('glyphicon-plus glyphicon-minus');
    $parent.find('.glyphicon').not(currentIcon).removeClass('glyphicon-minus').addClass('glyphicon-plus');

});
function insertStatement(){
            
var html  = '<div class="media">'+
'<div class="media-heading">'+
'<button class="btn btn-default btn-xs" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button> <span class="label label-info">12314</span> Expert -> Sonia now'+
'</div>'+

'<div class="panel-collapse collapse in" id="collapseOne">'+
'<div class="media-left">'+
'<div class="vote-wrap">'+
'<div class="save-post">'+
'<a href="#"><span class="glyphicon glyphicon-star" aria-label="Save"></span></a>'+
'</div>'+
'<div class="vote up">'+
'<i class="glyphicon glyphicon-menu-up"></i>'+
'</div>'+
'<div class="vote inactive">'+
'<i class="glyphicon glyphicon-menu-down"></i>'+
'</div>'+
'</div>'+

'</div>'+


'<div class="media-body">'+
'<p>Just got fired from TA role. Lost a huge income source.</p>'+
'<div class="comment-meta">'+
'<span><a href="#">delete</a></span>'+
'<span><a href="#">report</a></span>'+
'<span><a href="#">hide</a></span>'+
'<span>'+
'<a class="" role="button" data-toggle="collapse" href="#replyCommentT" aria-expanded="false" aria-controls="collapseExample">reply</a>'+
'</span>'+
'<div class="collapse" id="replyCommentT">'+
'<form>'+
'<div class="form-group">'+
'<label for="comment">Your Comment</label>'+
'<textarea name="comment" class="form-control" rows="3"></textarea>'+
'</div>'+
'<button type="submit" class="btn btn-default">Send</button>'+
'</form>'+
'</div>'+
'</div>';

'</div>'+
'</div>'+
'</div>';
$('#testdiv').append(html);
            return false;
        }
