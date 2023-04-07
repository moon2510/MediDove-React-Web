import React from 'react'
import './ServicesDetails.scss'
export default function ServicesDetailsArea() {
  return (
    <div>
      <div className='service-details-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-7 col-lg-8'>
              <article className='service-details-box'>
                <div className='service-detail mb-80'>
                  <img
                    className='service-detail-img img'
                    src='https://medi-dove.netlify.app/img/services/service-details-thumb1.jpg'
                  ></img>
                </div>
                <div className='section-title pos-rel mb-45'>
                  <div className='section-icon'>
                    <img
                      alt=''
                      className='section-back-icon back-icon-left'
                      src='https://medi-dove.netlify.app/img/section/section-back-icon-sky.png'
                    />
                  </div>
                  <div className='section-text pos-rel'>
                    <h5 className='green-color text-up-case'>Dental Care</h5>
                    <h1>We are here to help when you need us.</h1>
                  </div>
                  <div className='section-line pos-rel'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
                    />
                  </div>
                </div>
                <div className='service-details-text mb-30'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
                <div className='service-details-feature fix mb-35'>
                  <div className='ser-fea-box f-left'>
                    <div className='ser-fea-icon f-left'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/services/ser-fea-icon-1.png'
                      />
                    </div>
                    <div className='ser-fea-list fix'>
                      <h3>Personal care</h3>
                      <ul>
                        <li>
                          <i className='fas fa-check' />
                          Cillum dolore eu fugiat nulla.
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Consectetur adipisicing elit,
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Sed do eiusmod tempor inci.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='ser-fea-box f-left me-0'>
                    <div className='ser-fea-icon f-left'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/services/ser-fea-icon-2.png'
                      />
                    </div>
                    <div className='ser-fea-list fix'>
                      <h3>Lifestyle support</h3>
                      <ul>
                        <li>
                          <i className='fas fa-check' />
                          Didunt ut labore et dolore magna.
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Aliqua. Ut enim ad minim veniam.
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Quis nostrud exercitation ullamco.
                        </li>
                        <li>
                          <i className='fas fa-check' />
                          Laboris nisi ut aliquip ex ea.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='service-chart mb-55'>
                  <div
                    className='recharts-responsive-container'
                    height={300}
                    style={{ width: '100%', height: 300 }}
                    width={676}
                  >
                    <div
                      className='recharts-wrapper'
                      style={{
                        position: 'relative',
                        cursor: 'default',
                        width: 676,
                        height: 300,
                      }}
                    >
                      <svg
                        className='recharts-surface'
                        height={300}
                        version='1.1'
                        viewBox='0 0 676 300'
                        width={676}
                      >
                        <defs>
                          <clipPath id='recharts1-clip'>
                            <rect height={260} width={586} x={60} y={10} />
                          </clipPath>
                        </defs>
                        <g className='recharts-cartesian-grid'>
                          <g className='recharts-cartesian-grid-horizontal'>
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={646}
                              y={10}
                              y1={270}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={646}
                              y={10}
                              y1={205}
                              y2={205}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={646}
                              y={10}
                              y1={140}
                              y2={140}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={646}
                              y={10}
                              y1={75}
                              y2={75}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={646}
                              y={10}
                              y1={10}
                              y2={10}
                            />
                          </g>
                          <g className='recharts-cartesian-grid-vertical'>
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={60}
                              x2={60}
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1='157.66666666666669'
                              x2='157.66666666666669'
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1='255.33333333333334'
                              x2='255.33333333333334'
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={353}
                              x2={353}
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1='450.6666666666667'
                              x2='450.6666666666667'
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1='548.3333333333334'
                              x2='548.3333333333334'
                              y={10}
                              y1={10}
                              y2={270}
                            />
                            <line
                              fill='none'
                              height={260}
                              offset='[object Object]'
                              stroke='#ccc'
                              strokeDasharray='3 3'
                              width={586}
                              x={60}
                              x1={646}
                              x2={646}
                              y={10}
                              y1={10}
                              y2={270}
                            />
                          </g>
                        </g>
                        <g className='recharts-layer recharts-cartesian-axis recharts-xAxis xAxis'>
                          <line
                            className='recharts-cartesian-axis-line'
                            fill='none'
                            height={30}
                            orientation='bottom'
                            stroke='#666'
                            type='category'
                            width={586}
                            x={60}
                            x1={60}
                            x2={646}
                            y={270}
                            y1={270}
                            y2={270}
                          />
                          <g className='recharts-cartesian-axis-ticks'>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1={60}
                                x2={60}
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x={60}
                                y={278}
                              >
                                <tspan dy='0.71em' x={60}>
                                  Page A
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1='157.66666666666669'
                                x2='157.66666666666669'
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x='157.66666666666669'
                                y={278}
                              >
                                <tspan dy='0.71em' x='157.66666666666669'>
                                  Page B
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1='255.33333333333334'
                                x2='255.33333333333334'
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x='255.33333333333334'
                                y={278}
                              >
                                <tspan dy='0.71em' x='255.33333333333334'>
                                  Page C
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1={353}
                                x2={353}
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x={353}
                                y={278}
                              >
                                <tspan dy='0.71em' x={353}>
                                  Page D
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1='450.6666666666667'
                                x2='450.6666666666667'
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x='450.6666666666667'
                                y={278}
                              >
                                <tspan dy='0.71em' x='450.6666666666667'>
                                  Page E
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1='548.3333333333334'
                                x2='548.3333333333334'
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x='548.3333333333334'
                                y={278}
                              >
                                <tspan dy='0.71em' x='548.3333333333334'>
                                  Page F
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={30}
                                orientation='bottom'
                                stroke='#666'
                                type='category'
                                width={586}
                                x={60}
                                x1={646}
                                x2={646}
                                y={270}
                                y1={276}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={30}
                                orientation='bottom'
                                stroke='none'
                                fill='#666'
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                textAnchor='middle'
                                type='category'
                                width={586}
                                x={646}
                                y={278}
                              >
                                <tspan dy='0.71em' x='548.3333333333334'>
                                  Page F
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                <tspan dy='0.71em' x={646}>
                                  Page G
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className='recharts-layer recharts-cartesian-axis recharts-yAxis yAxis'>
                          <line
                            className='recharts-cartesian-axis-line'
                            fill='none'
                            height={260}
                            orientation='left'
                            stroke='#666'
                            type='number'
                            width={60}
                            x={0}
                            x1={60}
                            x2={60}
                            y={10}
                            y1={10}
                            y2={270}
                          />
                          <g className='recharts-cartesian-axis-ticks'>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={260}
                                orientation='left'
                                stroke='#666'
                                type='number'
                                width={60}
                                x={0}
                                x1={54}
                                x2={60}
                                y={10}
                                y1={270}
                                y2={270}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={260}
                                orientation='left'
                                stroke='none'
                                textAnchor='end'
                                type='number'
                                width={60}
                                x={52}
                                y={270}
                              >
                                <tspan dy='0.355em' x={52}>
                                  0
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={260}
                                orientation='left'
                                stroke='#666'
                                type='number'
                                width={60}
                                x={0}
                                x1={54}
                                x2={60}
                                y={10}
                                y1={205}
                                y2={205}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={260}
                                orientation='left'
                                stroke='none'
                                textAnchor='end'
                                type='number'
                                width={60}
                                x={52}
                                y={205}
                              >
                                <tspan dy='0.355em' x={52}>
                                  4000
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={260}
                                orientation='left'
                                stroke='#666'
                                type='number'
                                width={60}
                                x={0}
                                x1={54}
                                x2={60}
                                y={10}
                                y1={140}
                                y2={140}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={260}
                                orientation='left'
                                stroke='none'
                                textAnchor='end'
                                type='number'
                                width={60}
                                x={52}
                                y={140}
                              >
                                <tspan dy='0.355em' x={52}>
                                  8000
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={260}
                                orientation='left'
                                stroke='#666'
                                type='number'
                                width={60}
                                x={0}
                                x1={54}
                                x2={60}
                                y={10}
                                y1={75}
                                y2={75}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={260}
                                orientation='left'
                                stroke='none'
                                textAnchor='end'
                                type='number'
                                width={60}
                                x={52}
                                y={75}
                              >
                                <tspan dy='0.355em' x={52}>
                                  12000
                                </tspan>
                              </text>
                            </g>
                            <g className='recharts-layer recharts-cartesian-axis-tick'>
                              <line
                                className='recharts-cartesian-axis-tick-line'
                                fill='none'
                                height={260}
                                orientation='left'
                                stroke='#666'
                                type='number'
                                width={60}
                                x={0}
                                x1={54}
                                x2={60}
                                y={10}
                                y1={10}
                                y2={10}
                              />
                              <text
                                className='recharts-text recharts-cartesian-axis-tick-value'
                                fill='#666'
                                height={260}
                                orientation='left'
                                stroke='none'
                                textAnchor='end'
                                type='number'
                                width={60}
                                x={52}
                                y='10.5'
                              >
                                <tspan dy='0.355em' x={52}>
                                  16000
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className='recharts-layer recharts-area'>
                          <g className='recharts-layer'>
                            <defs>
                              <clipPath id='animationClipPath-recharts-area-2'>
                                <rect height={271} width={586} x={60} y={0} />
                              </clipPath>
                            </defs>
                            <g
                              className='recharts-layer'
                              clipPath='url(#animationClipPath-recharts-area-2)'
                            >
                              <g className='recharts-layer'>
                                <path
                                  className='recharts-curve recharts-area-area'
                                  d='M60,205C92.55555555555557,210.41666666666666,125.11111111111111,215.83333333333334
                                  ,157.66666666666669,221.25C190.22222222222223,226.66666666666666,222.7777777777778,237
                                  .5,255.33333333333334,237.5C287.8888888888889,237.5,320.44444444444446,224.82500000000002
                                  ,353,224.82500000000002C385.55555555555554,224.82500000000002,418.11111111111114,239.2875
                                  ,450.6666666666667,239.2875C483.22222222222223,239.2875,515.7777777777778,235.49583333333334
                                  ,548.3333333333334,231.1625C580.8888888888889,226.82916666666665,613.4444444444445,220.05833333333334
                                  ,646,213.2875L646,270C613.4444444444445,270,580.8888888888889,270,548.3333333333334,270C515.7777777777778
                                  ,270,483.22222222222223,270,450.6666666666667,270C418.11111111111114,270,385.55555555555554,270,353,270C320
                                  .44444444444446,270,287.8888888888889,270,255.33333333333334,270C222.7777777777778,270,190.22222222222223,270
                                  ,157.66666666666669,270C125.11111111111111,270,92.55555555555557,270,60,270Z'
                                  fill='#8884d8'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='none'
                                  type='monotone'
                                  width={586}
                                />
                                <path
                                  className='recharts-curve recharts-area-curve'
                                  d='M60,205C92.55555555555557,210.41666666666666,125.11111111111111,215.83333333333334,157.66666666666669,221.25C190.22222222222223,226.66666666666666,222.7777777777778,237.5,255.33333333333334,237.5C287.8888888888889,237.5,320.44444444444446,224.82500000000002,353,224.82500000000002C385.55555555555554,224.82500000000002,418.11111111111114,239.2875,450.6666666666667,239.2875C483.22222222222223,239.2875,515.7777777777778,235.49583333333334,548.3333333333334,231.1625C580.8888888888889,226.82916666666665,613.4444444444445,220.05833333333334,646,213.2875'
                                  fill='none'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='#8884d8'
                                  type='monotone'
                                  width={586}
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className='recharts-layer recharts-area'>
                          <g className='recharts-layer'>
                            <defs>
                              <clipPath id='animationClipPath-recharts-area-3'>
                                <rect height={240} width={586} x={60} y={0} />
                              </clipPath>
                            </defs>
                            <g
                              className='recharts-layer'
                              clipPath='url(#animationClipPath-recharts-area-3)'
                            >
                              <g className='recharts-layer'>
                                <path
                                  className='recharts-curve recharts-area-area'
                                  d='M60,166C92.55555555555557,182.26625,125.11111111111111,198.5325,157.66666666666669,198.5325C190.22222222222223,198.5325,222.7777777777778,78.24999999999999,255.33333333333334,78.24999999999999C287.8888888888889,78.24999999999999,320.44444444444446,161.32000000000002,353,161.32000000000002C385.55555555555554,161.32000000000002,418.11111111111114,161.2875,450.6666666666667,161.2875C483.22222222222223,161.2875,515.7777777777778,169.4125,548.3333333333334,169.4125C580.8888888888889,169.4125,613.4444444444445,156.41250000000002,646,143.41250000000002L646,213.2875C613.4444444444445,220.05833333333334,580.8888888888889,226.82916666666665,548.3333333333334,231.1625C515.7777777777778,235.49583333333334,483.22222222222223,239.2875,450.6666666666667,239.2875C418.11111111111114,239.2875,385.55555555555554,224.82500000000002,353,224.82500000000002C320.44444444444446,224.82500000000002,287.8888888888889,237.5,255.33333333333334,237.5C222.7777777777778,237.5,190.22222222222223,226.66666666666666,157.66666666666669,221.25C125.11111111111111,215.83333333333334,92.55555555555557,210.41666666666666,60,205Z'
                                  fill='#82ca9d'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='none'
                                  type='monotone'
                                  width={586}
                                />
                                <path
                                  className='recharts-curve recharts-area-curve'
                                  d='M60,166C92.55555555555557,182.26625,125.11111111111111,198.5325,157.66666666666669,198.5325C190.22222222222223,198.5325,222.7777777777778,78.24999999999999,255.33333333333334,78.24999999999999C287.8888888888889,78.24999999999999,320.44444444444446,161.32000000000002,353,161.32000000000002C385.55555555555554,161.32000000000002,418.11111111111114,161.2875,450.6666666666667,161.2875C483.22222222222223,161.2875,515.7777777777778,169.4125,548.3333333333334,169.4125C580.8888888888889,169.4125,613.4444444444445,156.41250000000002,646,143.41250000000002'
                                  fill='none'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='#82ca9d'
                                  type='monotone'
                                  width={586}
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className='recharts-layer recharts-area'>
                          <g className='recharts-layer'>
                            <defs>
                              <clipPath id='animationClipPath-recharts-area-4'>
                                <rect height={199} width={586} x={60} y={0} />
                              </clipPath>
                            </defs>
                            <g
                              className='recharts-layer'
                              clipPath='url(#animationClipPath-recharts-area-4)'
                            >
                              <g className='recharts-layer'>
                                <path
                                  className='recharts-curve recharts-area-area'
                                  d='M60,126.99999999999999C92.55555555555557,144.80999999999997,125.11111111111111,162.61999999999998,157.66666666666669,162.61999999999998C190.22222222222223,162.61999999999998,222.7777777777778,41.0375,255.33333333333334,41.0375C287.8888888888889,41.0375,320.44444444444446,128.82,353,128.82C385.55555555555554,128.82,418.11111111111114,125.84625,450.6666666666667,125.84625C483.22222222222223,125.84625,515.7777777777778,128.7875,548.3333333333334,128.7875C580.8888888888889,128.7875,613.4444444444445,119.0375,646,109.2875L646,143.41250000000002C613.4444444444445,156.41250000000002,580.8888888888889,169.4125,548.3333333333334,169.4125C515.7777777777778,169.4125,483.22222222222223,161.2875,450.6666666666667,161.2875C418.11111111111114,161.2875,385.55555555555554,161.32000000000002,353,161.32000000000002C320.44444444444446,161.32000000000002,287.8888888888889,78.24999999999999,255.33333333333334,78.24999999999999C222.7777777777778,78.24999999999999,190.22222222222223,198.5325,157.66666666666669,198.5325C125.11111111111111,198.5325,92.55555555555557,182.26625,60,166Z'
                                  fill='#ffc658'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='none'
                                  type='monotone'
                                  width={586}
                                />
                                <path
                                  className='recharts-curve recharts-area-curve'
                                  d='M60,126.99999999999999C92.55555555555557,144.80999999999997,125.11111111111111,162.61999999999998,157.66666666666669,162.61999999999998C190.22222222222223,162.61999999999998,222.7777777777778,41.0375,255.33333333333334,41.0375C287.8888888888889,41.0375,320.44444444444446,128.82,353,128.82C385.55555555555554,128.82,418.11111111111114,125.84625,450.6666666666667,125.84625C483.22222222222223,125.84625,515.7777777777778,128.7875,548.3333333333334,128.7875C580.8888888888889,128.7875,613.4444444444445,119.0375,646,109.2875'
                                  fill='none'
                                  fillOpacity='0.6'
                                  height={260}
                                  points='[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]'
                                  stroke='#ffc658'
                                  type='monotone'
                                  width={586}
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div
                        className='recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top'
                        style={{
                          pointerEvents: 'none',
                          visibility: 'hidden',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          transform: 'translate(558.333px, 210px)',
                        }}
                      >
                        <div
                          className='recharts-default-tooltip'
                          style={{
                            margin: 0,
                            padding: 10,
                            backgroundColor: 'rgb(255, 255, 255)',
                            border: '1px solid rgb(204, 204, 204)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <p
                            className='recharts-tooltip-label'
                            style={{ margin: 0 }}
                          >
                            Page F
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='service-doctors mb-55'>
                  <img
                    alt=''
                    src='https://medi-dove.netlify.app/img/services/service-doctors.png'
                  />
                </div>
                <div className='section-title pos-rel mb-50'>
                  <div className='section-text pos-rel'>
                    <h5 className='green-color text-up-case'>download</h5>
                    <h1>Free Download Resources</h1>
                  </div>
                  <div className='section-line pos-rel'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/shape/section-title-line.png'
                    />
                  </div>
                </div>
                <div className='download-area'>
                  <a className='download-box mb-20' href='#'>
                    <div className='single-download-inner'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/icon/pdf.png'
                      />
                      <span>The Balanced Care Method Flyer.pdf</span>
                      <span className='download-size'>57KB</span>
                    </div>
                  </a>
                  <a className='download-box mb-20' href='#'>
                    <div className='single-download-inner'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/icon/doc.png'
                      />
                      <span>Infomation sheet 2 2016-17.doc</span>
                      <span className='download-size'>87KB</span>
                    </div>
                  </a>
                  <a className='download-box mb-20' href='#'>
                    <div className='single-download-inner'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/icon/zip.png'
                      />
                      <span>What_is_home_care_manual.zip</span>
                      <span className='download-size'>112KB</span>
                    </div>
                  </a>
                </div>
                <div className='testi-box text-center pos-rel mb-0'>
                  <div className='testi-content testi-service-content pos-rel'>
                    <div className='testi-quato-icon'>
                      <img
                        alt=''
                        src='https://medi-dove.netlify.app/img/testimonials/testi-quato-icon.png'
                      />
                    </div>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                    <span />
                  </div>
                  <div className='testi-author'>
                    <h2 className='testi-author-title'>
                      Rosalina D. Williamson
                    </h2>
                    <span className='testi-author-desination'>
                      founder, uithemes
                    </span>
                  </div>
                  <div className='test-author-icon mb-10'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/testimonials/testi-author-icon.png'
                    />
                  </div>
                </div>
              </article>
            </div>
            <div className='col-xl-5 col-lg-4'>
              <div className='service-widget mb-50'>
                <div className='widget-title-box mb-30'>
                  <h3 className='widget-title'>More Services</h3>
                </div>
                <div className='more-service-list'>
                  <ul>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-1.png'
                          />
                        </div>
                        <div className='more-service-title'>Body Surgery</div>
                      </a>
                    </li>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-2.png'
                          />
                        </div>
                        <div className='more-service-title'>Dental Care</div>
                      </a>
                    </li>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-3.png'
                          />
                        </div>
                        <div className='more-service-title'>Eye Care</div>
                      </a>
                    </li>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-4.png'
                          />
                        </div>
                        <div className='more-service-title'>Blood cancer</div>
                      </a>
                    </li>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-5.png'
                          />
                        </div>
                        <div className='more-service-title'>
                          Neurology Sargery
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='/services'>
                        <div className='more-service-icon'>
                          <img
                            alt=''
                            src='https://medi-dove.netlify.app/img/services/more-ser-6.png'
                          />
                        </div>
                        <div className='more-service-title'>Allergic Issue</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='service-widget mb-50'>
                <div className='widget-title-box mb-30'>
                  <h3 className='widget-title'>Get Some Advice?</h3>
                </div>
                <form action='' className='service-contact-form'>
                  <div className='row'>
                    <div className='col-xl-12'>
                      <div className='contact-input contact-icon contact-user mb-20'>
                        <input placeholder='Enter your name' type='text' />
                      </div>
                    </div>
                    <div className='col-xl-12'>
                      <div className='contact-input contact-icon contact-mail mb-20'>
                        <input placeholder='Enter your email' type='text' />
                      </div>
                    </div>
                    <div className='col-xl-12'>
                      <div className='contact-input contact-icon contact-hourglass'>
                        <select
                          aria-label='Default select example'
                          className='form-select select_style'
                        >
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <div className='ser-form-btn text-center mt-40'>
                  <a
                    className='primary_btn btn-icon ml-0 request-for-call'
                    href='#'
                    style={{ animationDelay: '0.6s' }}
                    tabIndex={0}
                  >
                    <span>+</span>Request for call
                  </a>
                </div>
              </div>
              <div className='service-widget mb-50 border-0 p-0'>
                <div className='banner-widget'>
                  <a href='/contact'>
                    <img
                      alt=''
                      src='https://medi-dove.netlify.app/img/services/services-banner.png'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
