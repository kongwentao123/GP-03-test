$(function(){
    //加载商品数据
    $.ajax({
        url:'./data/goods.json',
        type:'get',
        dataType:'json',
        success:function(jsonArr){
            $.each(jsonArr,function(index,item){
                var goodsDom = `
                    <div class="goods">
                    <img src="${item.imgurl}" alt="">
                    <p>${item.price}</p>
                    <h3>${item.title}</h3>
                    <div code = "${item.code}">加入购物车</div>
                 </div> `;
                $('.content').append(goodsDom);
            })

        }
    });
    //点击加入购物车
    $('.content').on('click','.goods div',function(){
        var goodsArr  = [];
        if(localStorage.getItem('goods')){
            goodsArr = JSON.parse(localStorage.getItem('goods'));
        }
        // console.log(goodsArr);
        var code = $(this).attr('code');
        
        // console.log(code);
        var flag = false;
        $.each(goodsArr,function(index,item){
            if(item.code === code){
                item.num++;
                flag = true;
                return false;
            }
        })
            if(!flag){
                goodsArr.push({"code":code,"num":1});
            }
            localStorage.setItem('goods',JSON.stringify(goodsArr));
            alert('加入购物车成功！！！');

      

    })

})