import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardComponent implements OnInit {
  chartLabels: string[] = ['Em Andamento', 'Encerrados'];
  chartType: ChartType = 'pie';
  chartOptions: ChartOptions = {
    responsive: true,
  };

  registrationChartData: ChartData<'pie'> = {
    labels: this.chartLabels,
    datasets: [{ data: [10, 5], label: 'Cadastro de Aplicativos' }],
  };

  publicationChartData: ChartData<'pie'> = {
    labels: this.chartLabels,
    datasets: [{ data: [7, 3], label: 'Publicação de Aplicativos' }],
  };

  ngOnInit(): void {
    // Aqui você pode carregar os dados reais para os gráficos
  }
}
