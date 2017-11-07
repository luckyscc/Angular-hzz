import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
	showloading:boolean = true;
	constructor() { 
		setTimeout(()=>{
			this.showloading = false;
		},1500);
	}

	ngOnInit() {
	}
	chartOption = {
		title : {
			text: '北川河最近7天内事件统计',
			textStyle:{
				fontSize: 14,
				color:'#0094ff',
				fontWeight:'normal'
			}
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['河道破坏','重金属','垃圾倾倒']
		},
		toolbox: {
			show : true,
			feature : {
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true},
				dataView : {show: true, readOnly: false}
			}
		},
		calculable : true,
		xAxis : [
		{
			type : 'category',
			data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		}
		],
		yAxis : [
		{
			type : 'value'
		}
		],
		series : [
		{
			name:'河道破坏',
			type:'bar',
			data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			markPoint : {
				data : [
				{type : 'max', name: '最大值'},
				{type : 'min', name: '最小值'}
				]
			},
			markLine : {
				data : [
				{type : 'average', name: '平均值'}
				]
			}
		},
		{
			name:'重金属',
			type:'bar',
			data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
			markPoint : {
				data : [
				{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
				{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
				]
			},
			markLine : {
				data : [
				{type : 'average', name : '平均值'}
				]
			}
		},
		{
			name:'垃圾倾倒',
			type:'bar',
			data:[6.1, 4.2, 2.6, 20.4, 17.7, 40.5, 155.6, 182.2, 8.7, 18.8, 6.7, 12.3],
			markPoint : {
				data : [
				{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
				{name : '年最低', value : 2.6, xAxis: 11, yAxis: 3}
				]
			},
			markLine : {
				data : [
				{type : 'average', name : '平均值'}
				]
			}
		}
		]
	};
}