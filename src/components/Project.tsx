import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/project1.png'
import IMG2 from '../assets/project2.png'
import IMG3 from '../assets/project3.png'
import IMG4 from '../assets/project4.png'
import IMG5 from '../assets/project5.png'
import IMG6 from '../assets/project6.png'

interface ProjectItem {
  image: string;
  alt: string;
  title: string;
  link: string;
  demo?: string;
  backendLink?: string;
}

interface PlaceholderItem {
  isPlaceholder: true;
  id: string;
}

type DisplayItem = ProjectItem | PlaceholderItem;

const Project: React.FC = () => {
  const [itemsPerRow, setItemsPerRow] = useState(3);

  const projectList: ProjectItem[] = [
    {
      image: IMG6,
      alt: 'moviesearch',
      title: 'ReactNative - MovieSearch',
      link: "https://github.com/minji-code/MovieDataBase_mobile",
      demo: ""
    },
    {
      image: IMG5,
      alt: 'icecream_website',
      title: 'IceCream Ecommerce App',
      link: "https://github.com/minji-code/IceCreamScoop",
      demo: "https://minji-code.github.io/IceCreamScoop/"
    },
    {
      image: IMG3,
      alt: 'memorygame',
      title: 'Memory Game',
      link: "https://github.com/minji-code/Memory_Game",
      demo: "https://minji-code.github.io/Memory_Game/"
    },
    {
      image: IMG2,
      alt: 'weatherapp',
      title: 'Weather Search Application',
      link: "https://github.com/minji-code/Weather_App",
      demo: "https://minji-code.github.io/Weather_App/"
    },
    {
      image: IMG4,
      alt: 'CRUDapp',
      title: 'Contact CRUD application',
      link: "https://github.com/minji-code/contactlist",
      backendLink: "https://github.com/minji-code/express"
    },
    {
      image: IMG1,
      alt: 'calculatorapp',
      title: 'Calculator Web Application',
      link: "https://github.com/minji-code/MyCalculator",
      demo: "https://minji-code.github.io/MyCalculator/"
    }
  ]

  // placeholders
  const totalItems = projectList.length;
  const rowCount = Math.ceil(totalItems / itemsPerRow);
  const targetItems = rowCount * itemsPerRow;
  const placeholdersNeeded = targetItems - totalItems;

  const displayItems: DisplayItem[] = [
    ...projectList,
    ...Array(placeholdersNeeded).fill(null).map((_, index) => ({
      isPlaceholder: true as const,
      id: `placeholder-${index}`
    }))
  ];

  useEffect(() => {
    const updateItemsPerRow = () => {
      const containerWidth = document.querySelector('.flex.flex-wrap')?.clientWidth || 0;
      const itemWidth = 315; 
      const gap = 64; 
      const calculatedItemsPerRow = Math.floor((containerWidth + gap) / (itemWidth + gap));
      setItemsPerRow(Math.max(1, calculatedItemsPerRow));
    };

    updateItemsPerRow();
    window.addEventListener('resize', updateItemsPerRow);
    return () => window.removeEventListener('resize', updateItemsPerRow);
  }, []);

  return (
    <div className='page justify-center' id='project'>
      <div className='header'>
        <h3>My Recent Work</h3>
        <h2>Projects</h2>
      </div>

      <div className='flex flex-wrap gap-16 justify-center p-4'>
        {displayItems.map((item) => (
          'isPlaceholder' in item ? (
            <div key={item.id} className='projectDiv'>
              <div className="projectItem flex items-center justify-center">
                <h4 className='text-[var(--color-primary)] text-xl'>Coming Soon...</h4>
              </div>
            </div>
          ) : (
            <div key={item.title} className='projectDiv'>
              <div className="projectItem">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.alt} />
                </div>
                <h4 className='p-2'>{item.title}</h4>
                <div className='flex gap-2'>
                  {item.backendLink ? (
                    <>
                      <a href={item.link} className='btn' target='_blank' rel="noopener noreferrer">FrontEnd</a>
                      <a href={item.backendLink} className='btn' target='_blank' rel="noopener noreferrer">BackEnd</a>
                    </>
                  ) : (
                    <>
                      <a href={item.link} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                      {item.demo && (
                        <a href={item.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Project 