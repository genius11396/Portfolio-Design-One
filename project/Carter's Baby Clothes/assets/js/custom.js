
					function count()
					{
							var shop_str=localStorage.getItem("it_shop");

							if (shop_str) {
							var shop_arr=JSON.parse(shop_str);

							if (shop_arr!=0) {
								var count=0
								$.each(shop_arr,function(i,v)
								{
								count+=v.qty;
								console.log(count);
								$("#count").text("("+count+")");
							})

							}
							else
							{
								$("#count").text('');
							}
						}
						else
						{
							$("#count").text('');
						}
						
					}
