import React from 'react';
import { Gauge, G2 } from '@ant-design/plots';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function GaugeCard({ percent, name, imagelink }) {

    const { registerShape, Util } = G2;

    registerShape('point', 'custom-gauge-indicator', {
        draw(cfg, container) {
            const { indicator, defaultColor } = cfg.customInfo;
            const { pointer } = indicator;
            const group = container.addGroup();

            const center = this.parsePoint({
                x: 0,
                y: 0,
            });

            if (pointer) {
                const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
                const radius = this.coordinate.getRadius();
                const midAngle = (startAngle + endAngle) / 2;
                const { x: x1, y: y1 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle + 1 / Math.PI);
                const { x: x2, y: y2 } = Util.polarToCartesian(center.x, center.y, radius / 15, midAngle - 1 / Math.PI);
                const { x, y } = Util.polarToCartesian(center.x, center.y, radius * 0.65, midAngle);
                const path = [['M', center.x, center.y], ['L', x1, y1], ['L', x, y], ['L', x2, y2], ['Z']]; // pointer

                group.addShape('path', {
                    name: 'pointer',
                    attrs: {
                        path,
                        fill: defaultColor,
                        ...pointer.style,
                    },
                });
            }

            return group;
        },
    });

    const colorList = ['#ff3232', '#ffc800', '#37c153'];

    const getColor = (value) => {
        if (value < 0.3) {
            return colorList[0];
        } else if (value < 0.67) {
            return colorList[1];
        }
        return colorList[2];
    }

    const config = {
        width: 300,
        height: 300,
        percent: percent,
        range: {
            ticks: [0, 1 / 3, 2 / 3, 1],
            color: colorList,
        },
        indicator: {
            shape: 'custom-gauge-indicator',
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                    lineWidth: 1,
                    fill: '#D0D0D0',
                },
            },
        },
        statistic: {
            content: {
                formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                style: {
                    fontSize: 30,
                    color: getColor(percent)
                }
            },

        }
    };
    return (
        <Card sx={{ maxWidth: 550, display: "flex" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ marginTop: '10' }}>
                    <CardMedia
                        component="img"
                        style={{ width: 100, height: 100 }}
                        image={imagelink}
                        alt="green iguana"
                    />
                </CardContent>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {percent < 0.3 ? 'Negative' : percent < 0.67 ? 'Neutral' : 'Positive'}
                    </Typography>
                </CardContent>
            </Box>
            <div style={{ width: 300, height: 300, marginLeft: '15' }}>
                <Gauge {...config} />
            </div>
        </Card>
    )
};