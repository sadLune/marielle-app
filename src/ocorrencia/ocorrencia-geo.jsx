import React, { Component } from 'react'

export default class Geo extends Component {
    render() {
        return (
            <div>
                <iframe
                    title="geo"
                    width="100%"
                    height="800"
                    seamless
                    frameBorder="0"
                    src="https://marielle-superset.herokuapp.com/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22mapbox%22%2C%22slice_id%22%3A7%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22time_range%22%3A%22Last+week%22%2C%22all_columns_x%22%3A%22LONGITUDE%22%2C%22all_columns_y%22%3A%22LATITUDE%22%2C%22clustering_radius%22%3A%2260%22%2C%22row_limit%22%3A10000%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_d8ovhkt2p7_xshpnv0j6nd%22%2C%22isExtra%22%3Afalse%2C%22isNew%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22LATITUDE%22%7D%2C%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_wyscxs2yp5k_dxka1hx65in%22%2C%22isExtra%22%3Afalse%2C%22isNew%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22LONGITUDE%22%7D%5D%2C%22groupby%22%3A%5B%5D%2C%22point_radius%22%3A%22Auto%22%2C%22point_radius_unit%22%3A%22Pixels%22%2C%22mapbox_label%22%3A%5B%5D%2C%22pandas_aggfunc%22%3A%22sum%22%2C%22render_while_dragging%22%3Atrue%2C%22mapbox_style%22%3A%22mapbox%3A%2F%2Fstyles%2Fmapbox%2Flight-v9%22%2C%22global_opacity%22%3A1%2C%22mapbox_color%22%3A%22rgb%280%2C+122%2C+135%29%22%2C%22viewport_longitude%22%3A-47.807427595021586%2C%22viewport_latitude%22%3A-22.199848223914003%2C%22viewport_zoom%22%3A6.932509976510208%7D&standalone=true&height="
                ></iframe>
            </div>
        )
    }
}