import React, { FC, useMemo } from 'react'
import { navigate } from '@reach/router'

interface Props {
  tags?: string[]
}

const TagsSection: FC<Props> = props => {
  const { tags } = props

  // ANCHOR: - Component functions

  const handleTagClick = (tag: string) => {
    navigate(`/tags/${tag}`)
  }

  return (
    <div className='flex flex-row'>
      {tags?.map(tag => (
        // Pill component
        <div
          key={tag}
          className={`
            text-sm rounded cursor-pointer px-3 py-2 mr-3 
          bg-green-200 hover:bg-green-400 text-gray-600 
            dark:bg-gray-700 dark:hover:bg-green-500 dark:text-gray-200 
          `}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default TagsSection
