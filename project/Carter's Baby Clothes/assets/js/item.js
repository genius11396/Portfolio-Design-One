			$(document).ready(function(){
				count();

			$(".add_to_cart").click(function(){
				var id=$(this).data('id');
				var name=$(this).data('name');
				var price=$(this).data('price');
				var brand=$(this).data('brand');
				
				var item={id1:id,
					name1:name,
					price1:price,
					brand1:brand,
					qty:1
					}
				
				var shop_str=localStorage.getItem("it_shop");
				var shop_arr;
				if(shop_str==null)
				{
					shop_arr=Array();
				}
				else
				{
					shop_arr=JSON.parse(shop_str);
				}

				var status=false;
				$.each(shop_arr,function(i,v){
					if(id==v.id1){
						status=true;
						v.qty++;
					}
				})

				if (status==false) {
					shop_arr.push(item);
				}

				var shopData=JSON.stringify(shop_arr);
				localStorage.setItem("it_shop",shopData);
				count();
			})
							
			
		})