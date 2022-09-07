import React from "react";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

// STYLES

import { 
  Container, 
  Legend, 
  LegendContainer, 
  SideLeft, 
  SideRight 
} from '@components/BarChartBox/styles';

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{ title }</h2>

        <LegendContainer>
        {
          data && data.map((indicator) => (
            <Legend color={ indicator.color } key={ uuidv4() }>
              <div>{ indicator.percent || '--' }</div>
              <span>{ indicator.name }</span>
            </Legend>
          ))
        }
      </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <BarChart 
            data={ data } 
            width={500}
            height={300}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
            barSize={80}
          >
            <Bar dataKey="amount">
              { data.map((indicator) => (
                <Cell 
                  key={ indicator.name }
                  cursor="pointer"
                  fill={ indicator.color }
                />
              )) }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export default BarChartBox;
