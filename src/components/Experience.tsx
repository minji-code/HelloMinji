import React from 'react'
import cv from '../assets/Minji_K_Suh_Resume.pdf' 
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,
  Box
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const Experience: React.FC = () => {

  const historyList = [
    {
      company: 'Roadway Management Technologies',
      position: 'Software Engineer',
      date: 'Dec 2022 – Present',
      description: [
        'Led the full-stack migration of a production SaaS platform from Laravel to a modular React/Next.js architecture, improving code maintainability and feature velocity.',
        'Designed and implemented performance-optimized UI components and backend API endpoints to support high-traffic user workflows.',
        'Refactored and redesigned core database structures, resulting in increased query performance and scalability for growing data needs.',
        'Collaborated cross-functionally with product managers, design, and platform engineers to scope and deliver features aligned with user and business goals.',
        'Triaged and resolved production issues through rapid hotfixes and root cause analysis, minimizing downtime and improving user trust.',
        'Defined internal development workflows using Git (branching, rebasing, code review), and contributed to improving team-wide coding standards and documentation practices.',
      ]
    },
    {
      company: 'OneTrust',
      position: 'Instructional Designer & Implementation Consultant',
      date: 'Jan 2020 – June 2022',
      description: [
        'Integrated feedback and performance data from stakeholders to evaluate product effectiveness.',
        'Assisted clients in assessing project scope and drafting custom statements of work.',
        'Collaborated with cross-functional teams, including Legal and Security, to develop eLearning courses.'
      ]
    },
    {
      company: 'Columbia Air Force Research',
      position: 'Research Assistant',
      date: 'Nov 2023 – Aug 2017',
      description: [
        'Created regression forecasting models to schedule preventative maintenance for aircraft.',
        'Performed data cleaning and preprocessing to identify appropriate predictors for the model.'
      ]
    },
    {
      company: 'JSW Law Group',
      position: 'Senior Paralegal',
      date: 'Jan 2019 – Jan 2020',
      description: [
        'Managed 30-40 personal injury cases per month from intake to settlement.',
        'Negotiated settlement offers with insurance adjusters and medical providers.',
        'Consulted with clients to strategize case handling based on individual needs.'
      ]
    }
  ]

  return (
    <div className='page justify-center items-center' id='experience'>
      <div className='header'>
        <h3>Employment History</h3>
        <h2>Experience</h2>
      </div>


      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
          <a href={cv} download className='btn'>
            Download Resume
          </a>
        </div>

        {/* Experience Accordion */}
        <div className="flex gap-10">
        <div className="w-1/2">
            <div className=" rounded-lg  p-6 border-l-4 border-[var(--color-accentA)]">
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-4">
                Summary
              </h3>
              <div className = 'flex flex-col gap-3 text-gray-700 leading-relaxed text-base'>
              <p>
                Full-Stack Software Engineer with 3 years of experience designing and scaling production SaaS platforms. Skilled in both front-end and back-end technologies, with a strong focus on system performance and cross-functional collaboration.
              </p>
              <p>
                Led complex technical migrations, backend refactors, and database redesigns in partnership with product, design, and engineering teams. Passionate about building scalable systems, improving development processes, and contributing to user-centric platforms.
              </p>
              <p>
                Experienced in modern web technologies including React, Next.js, TypeScript, Node.js, and Laravel. Strong advocate for clean code practices, performance optimization, and collaborative development workflows.
              </p>
              </div>
            </div>
          </div>
        <div className="space-y-4 w-3/5 pt-14">
          {historyList.map((job, index) => (
            <Accordion 
              key={index}
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderLeft: '4px solid var(--color-accentA)',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '8px 0',
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 2,
                    width: '100%'
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          color: 'var(--color-dark)',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}
                      >
                        {job.position}
                      </Typography>
                      <Typography 
                        variant="subtitle1"
                        sx={{ 
                          color: 'var(--color-accentA)',
                          fontWeight: 500
                        }}
                      >
                        {job.company}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: 'gray.600',
                        fontWeight: 500,
                        minWidth: 'fit-content',
                        alignSelf: 'flex-end'
                      }}
                    >
                      {job.date}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              
              <AccordionDetails sx={{ paddingTop: 0 }}>
                <Box sx={{ spaceY: 2 }}>
                  {job.description.map((bullet, bulletIndex) => (
                    <Box 
                      key={bulletIndex} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}
                    >
                      <Typography 
                        component="span"
                        sx={{ 
                          color: 'var(--color-accentA)',
                          marginRight: '8px',
                          marginTop: '2px',
                          fontSize: '16px'
                        }}
                      >
                        •
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: 'gray.700',
                          lineHeight: 1.6
                        }}
                      >
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        </div>
      </div>
    </div>
  )
}

export default Experience 
