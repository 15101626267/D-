var a={}, b='0', c=0;  
a[b]='珠峰'; //===> a["0"]="珠峰"
a[c]='培训'; //====> a[0] ="培训"   {"0":"培训"}
console.log(a[b]);// 

