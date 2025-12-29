//data types
//Primitive: copied by VALUE (independent copy)

//strings:text inside '', "" or `` is a string.let name="om";
//number:any number
//boolean true/false.let a=true;
//null:no value given wantedly.
//undefined:means we created variable and didnt give value then default value is undefined.let a;->undefined
//Symbol: unique and immutable value. let u1 = Symbol("abc"); let u2 = Symbol("abc");u1 === u2 // false
//bigint:Value bigger than max safe integer.Add n at end of value.ex:let a=9007199254740991n;then a+5n;write n at end.
//reference:w copied by reference (same memory).ex:arrays[],objects{},functions()  ex:let obj a{name="harsh"}let b=a; b.name="harshita"; here b and a both change which is problem.

//Dynamic typing:in js no static typing so in dynamic we can change data value like let a=10;then a=true;or a="om" from string to int anything but not good.

//typeofquirks:type of null=obj,type of nan = number
//"5"+1="51" + can do add and concatenate(if string) whereas other operator only one operation
//0 false undefined null Nan "" document.all all these are falsy values other all true.to check add 2 !! before value ex:!!null=false.