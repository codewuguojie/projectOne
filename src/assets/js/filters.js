/**
 * Created by huamin on 2018/4/12.
 */
//money 类型为string 或 number, 调用：numFormat(10000)或numFormat('10000');
export let numFormat = value => {
  let m2 = parseFloat(value);
  if(isNaN(m2)) {
    return false;
  }
  let num = m2 + ""
  let re = /([0-9]+\.[0-9]{2})[0-9]*/;
  m2 = num.replace(re, "$1")

  let money = m2.toString();
  let pos_decimal = money.indexOf('.');
  if(pos_decimal < 0) {
    pos_decimal = money.length;
    money += '.';
  }
  while(money.length <= pos_decimal + 2) {
    money += '0';
  }
  if(typeof money == "number") money = money.toString();
  return money.replace(/^(\d+)((\.\d+)?)$/, function(v1, v2, v3) {
    return v2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + (v3 || '.00');
  });
}



