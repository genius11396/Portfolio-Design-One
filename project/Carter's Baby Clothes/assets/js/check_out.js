		// var j=1;
		$(document).ready(function(){
			
			getData();
			function getData(){
				count();
				var shop_str=localStorage.getItem("it_shop");
			if (shop_str) {
				var shop_arr=JSON.parse(shop_str);
				var html='';
				var total=0;
				$.each(shop_arr,function(i,v){
					var qty=v.qty;
					var price=v.price1;
					var sub_total=qty*price;
					total+=sub_total;
					html+=`<tr>
							<td>${v.id1}</td>
							<td>${v.name1}</td>
							<td>${v.brand1}</td>
							<td>${v.price1}</td>
							<td> <button class="min" data-item_min="${i}">-</button>${v.qty} <button class="max" data-item_i="${i}">+</button></td>
							<td>${sub_total}</td>
							</tr>`;
						

				})
				html+=`<tr>
						<td colspan="5">Total</td>
						<td>${total}</td>
						</tr>`;
				$("#tbody").html(html);
			}
			else{
				html='';
				$("#tbody").html(html);
			}
			}

			$("#tbody").on('click','.min',function(){

				var item_min=$(this).data("item_min");

				var shop_str=localStorage.getItem("it_shop");
				if (shop_str) {
					var shop_arr=JSON.parse(shop_str);

					$.each(shop_arr,function(i,v){
						if (item_min==i) {
							v.qty--;
							if (v.qty==0) {
								shop_arr.splice(item_min,1)
							}

						}
						var shopData=JSON.stringify(shop_arr);
						localStorage.setItem("it_shop",shopData);
						getData();
					})
				}

			})
			$("#tbody").on('click','.max',function(){
				var item_i=$(this).data("item_i");

				var shop_str=localStorage.getItem("it_shop");
				if (shop_str) {
					var shop_arr=JSON.parse(shop_str);

					$.each(shop_arr,function(i,v){
						if (item_i==i) {
							v.qty++;

						}
						var shopData=JSON.stringify(shop_arr);
						localStorage.setItem("it_shop",shopData);
						getData();
					})
				}
			})

			$("#order").click(function(){
				localStorage.clear();
				getData();
			})



		})