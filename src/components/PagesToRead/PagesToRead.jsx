import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const PagesToRead = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const [bookData, setBookData] = useState([]);

useEffect(() => {
  const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const chartData = savedBooks.map((book) =>({
     name: book.name,
     Pages: book.pages,
  }));
  setBookData(chartData);
},[]);
  
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  
const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

    return ( 
        <div className='w-11/12 m-auto text-center'>
    <BarChart 
    width={1000}
    height={500}
    data={bookData}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
    >

<CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />

      <YAxis />
      <Tooltip />
      <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}

      </Bar>
    </BarChart>
        </div>
    );
};

export default PagesToRead;