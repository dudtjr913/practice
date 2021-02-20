import invoices from '../json/invoices.js';
import plays from '../json/plays.js';
import { createStatementData } from './createStatementData.js';

const statement = (invoices, plays) => {
  return renderPlainText(createStatementData(invoices, plays));
};

const renderPlainText = (data) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
};

const htmlStatement = (invoices, plays) => {
  return renderHtml(createStatementData(invoices, plays));
};

const renderHtml = (data) => {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>';
  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td></td>(${perf.audience}석)</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
  return result;
};

const usd = (aNumber) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
};

console.log(statement(invoices, plays));
