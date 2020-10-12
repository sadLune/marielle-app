import React, { Component } from 'react'
import Header from '../template/header'

export default class Relatorio extends Component {
    render() {
        return (
            <div>
                <Header name='Ocorrências' small='Relatórios'></Header>
                <iframe
                    title="sexo"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A2%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22SEXO%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
                <iframe
                    title="idade"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A3%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22IDADE%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
                <iframe
                    title="estadocivil"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A4%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22ESTADOCIVIL%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
                <iframe
                    title="graudeinstrucao"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A5%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22GRAUINSTRUCAO%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
                <iframe
                    title="cor"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A6%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22CORCUTIS%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
                <iframe
                    title="profissao"
                    width="600"
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A1%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_grain_sqla%22%3Anull%2C%22time_range%22%3A%22Last+week%22%2C%22query_mode%22%3A%22aggregate%22%2C%22groupby%22%3A%5B%22PROFISSAO%22%5D%2C%22metrics%22%3A%5B%22count%22%5D%2C%22all_columns%22%3A%5B%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22order_by_cols%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22order_desc%22%3Atrue%2C%22adhoc_filters%22%3A%5B%5D%2C%22table_timestamp_format%22%3A%22smart_date%22%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=400"
                ></iframe>
            </div>
        )
    }
}