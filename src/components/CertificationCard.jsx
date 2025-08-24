import React from 'react';

export default function CertificationCard({ certification }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Certification Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">{certification.name}</h3>
            <p className="text-primary-100 text-sm">{certification.provider}</p>
          </div>
          <div className="ml-4 text-right">
            <p className="text-primary-100 text-sm">
              {certification.month} {certification.year}
            </p>
          </div>
        </div>
      </div>

      {/* Certification Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {certification.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {certification.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <span
                key={`${certification.id}-skill-${index}`}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Credential Info */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Credential ID</p>
              <p className="text-sm font-mono text-gray-900">{certification.credentialId}</p>
            </div>
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Verify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
