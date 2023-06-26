'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react'

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({id, image, title, name, avatarUrl, userId} : Props) => {

    const [randomLikes, setRandomLikes] = useState(0)
    const [randomeViews, setRandomViews] = useState('')

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 1000))
        setRandomViews(String((Math.floor(Math.random() * 10000)/1000).toString() + 'k'))
    }, [])

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
        <Link href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
        >
            <Image 
            src={image}
            width={414}
            height={300}
            className='w-full h-full object-cover rounded-2xl'
            alt="Project Image"
            />
            <div className="hidden group-hover:flex profile_card-title">
                <p>{title}</p>
            </div>
        </Link>
        <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
            <Link href={`/profile/${userId}`}>
                <div className='flexCenter gap-2'>
                    <Image 
                        src={avatarUrl}
                        width={30}
                        height={30}
                        className='rounded-full'
                        alt="Profile Image"
                    />
                    <p>{name}</p>
                </div>
            </Link>
            <div className='flexCenter gap-3'>
                <div className='flexCenter gap-2'>
                    <Image 
                        src="/hearth.svg"
                        width={16}
                        height={16}
                        alt="heart"
                    />
                    <p className='text-sm'>{randomLikes}</p>
                </div>
                <div className='flexCenter gap-2'>
                    <Image 
                        src="/eye.svg"
                        width={16}
                        height={16}
                        alt="heart"
                    />
                    <p className='text-sm'>{randomeViews}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard