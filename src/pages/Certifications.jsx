import React, { useState } from 'react';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';

export default function Certifications() {
  const [filter, setFilter] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  // Filter certifications
  const filteredCertifications = filter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that demonstrate my commitment to continuous learning and expertise in various technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{certifications.length}</div>
            <div className="text-gray-600">Total Certifications</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600">Different Categories</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {new Date().getFullYear() - Math.min(...certifications.map(cert => cert.year)) + 1}
            </div>
            <div className="text-gray-600">Years of Learning</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing {filteredCertifications.length} certification{filteredCertifications.length !== 1 ? 's' : ''}
            {filter !== 'All' && ` in ${filter}`}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCertifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>

        {/* Timeline View */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certification Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {certifications
                .sort((a, b) => b.year - a.year || 
                  new Date(`${b.month} 1, ${b.year}`).getTime() - new Date(`${a.month} 1, ${a.year}`).getTime())
                .map((cert, index) => (
                  <div key={cert.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-2">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            cert.category === 'Web Development' ? 'bg-blue-500' :
                            cert.category === 'Cloud Computing' ? 'bg-orange-500' :
                            cert.category === 'Data Science' ? 'bg-green-500' :
                            cert.category === 'Project Management' ? 'bg-purple-500' :
                            'bg-gray-500'
                          }`}></span>
                          <span className="text-sm text-gray-500 font-medium">{cert.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                        <p className="text-primary-600 font-semibold mb-2">{cert.provider}</p>
                        <p className="text-sm text-gray-600 mb-3">{cert.month} {cert.year}</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={`${cert.id}-skill-${skillIndex}`}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills Acquired</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(certifications.flatMap(cert => cert.skills)))
                .sort()
                .map((skill, index) => (
                  <span
                    key={`skill-${index}`}
                    className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and I believe in staying current through continuous learning. 
              These certifications represent my commitment to maintaining and expanding my technical expertise.
            </p>
            <p className="text-lg text-primary-200 mb-8">
              "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                See My Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
