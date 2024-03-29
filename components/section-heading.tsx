import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({children}: SectionHeadingProps) {
    return (
        <div>
            <h2 className='text-3xl font-medium text-slate-200 capitalize mb-8'>{children}</h2>
        </div>
    )
}