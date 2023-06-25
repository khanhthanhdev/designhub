'use client'
import {ChangeEvent} from 'react'
import { SessionInterface } from "@/common.types";
import Image from 'next/image';
import FormField from './FormField';

type Props = {
    type: string;
    session: SessionInterface
}

const ProjectForm = ({type, session} : Props) => {

    const handleFormSubmit = (e: React.FormEvent) => {}
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {}
    const form = {
        image: '',
        title: '',
    };

    const handleStateChange = (fieldName: string, value: string) => {

    }
  return (
    <form
        onSubmit={handleFormSubmit}
        className="flexStart form"
    >
        <div className="flexStart form_image-container">
            <label htmlFor="poster" className="flexCenter form_image-label">
                {!form.image && 'Choose a poster for your project'}
            </label>
            <input 
                id="image"
                type="file"
                accept="image/*"
                required={type === 'create'}
                className="form_image-input"
                onChange={handleChangeImage}
            />
            {form.image && (
                <Image
                    src={form?.image}
                    className="sm:p-10 object-contain z-20"
                    alt="Project poster"
                    fill
                />
            )}

        
        </div>
        <FormField
                title="Description"
                state={form.description}
                placeholder="Show the description of your project"
                setState={(value) => handleStateChange('description', value)}
        />
        <FormField
                type="url"
                title="Website URL"
                state={form.liveSiteUrl}
                placeholder="https://designhub.vercel.app"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
        />
        <FormField
                type="url"
                title="Github URL"
                state={form.githubUrl}
                placeholder="https://github.com/"
                setState={(value) => handleStateChange('githubUrl', value)}
        />
        <FormField
                title="Title"
                state={form.title}
                placeholder="DesignHub"
                setState={(value) => handleStateChange('title', value)}
        />
        
        <div className="flexStart w-full">
            <button>Create</button>
        </div>
    </form>
  )
}

export default ProjectForm