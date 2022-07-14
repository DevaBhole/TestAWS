exports.isPrime=function (a){
                           var i;
						   var flag=true;
                           for(i=2;i<a;i++){
						   if(a%i==0)
						   {
							   flag=false;
							   break;
						   }
						    
						   }
						   return flag;
 };
 
 exports.calFact=function(b){
	                          var i;
							  var f=1;
							  for(i=b;i>=1;i--)
							  {
								  f=f*i;
							  }
							  return f;
	 
 };
 
 exports.isPerfect=function(c){
	                            var res='perfect';
								var rse='not perfect';
	                            var t=0;
								for(var i=1;i<c;i++)
								{
									if(c%i==0)
										t=t+i;
								}
								if(t==c)
									return res;
								else
									return rse;
	 
 };