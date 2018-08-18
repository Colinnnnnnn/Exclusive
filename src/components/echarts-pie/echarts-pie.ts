import { Component, ElementRef, ViewChild  } from '@angular/core';
import * as echarts from 'echarts';

/**
 * Generated class for the EchartsPieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'echarts-pie',
  templateUrl: 'echarts-pie.html'
})
export class EchartsPieComponent {

	constructor() {
	}
	//显示图形的容器
	@ViewChild('echarts') echarts: ElementRef;
	//显示数据为官方文档数据
	private pieChart = {
		//标题
		title: {
			text: '用户访问来源',
			subtext: '纯属虚构',
			x: 'center'
		},
		//百分比提示信息
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		//用例
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
		},
		//扇形配置项
		series: [
			{
				name: '访问来源',
				type: 'pie',
				radius: '55%',
				center: ['50%', '60%'],
				data: [
					{ value: 335, name: '直接访问' },
					{ value: 310, name: '邮件营销' },
					{ value: 234, name: '联盟广告' },
					{ value: 135, name: '视频广告' },
					{ value: 1548, name: '搜索引擎' }
				],
				itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
				}
			}
		]
	};

	private initChart() {
		//echarts初始化
		echarts.init(this.echarts.nativeElement).setOption(this.pieChart, true);
	}

	ngAfterViewInit() {

		this.initChart();
	}



}
