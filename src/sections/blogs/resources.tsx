"use client";
import { resourcesCategories } from "@/data";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
import { BlogCard } from "@/components";
import { Blog } from "@/utils/dataTypes/types";

interface BlogsProps {
  blogs: Blog[];
}

const Resources = ({ blogs }: BlogsProps) => {
  // const [resources, setResources] = useState(blogsResourcesData);
  const [resources, setResources] = useState(blogs);
  const [activeTab, setActiveTab] = useState(resourcesCategories[0].value);

  const filterResources = (category: string) => {
    if (category === "all") {
      setResources(blogs);
    } else {
      setResources(
        blogs.filter((resource) => resource.fields.category === category)
      );
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveTab(category);
    filterResources(category);
  };

  console.log(blogs);

  return (
    <section className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20">
      <div className="bg-[#FFFFFFD9] px-3 py-7 md:px-7 md:py-10 lg:px-8 lg:py-12 xl:px-10 xl:py-14 rounded-t-3xl ">
        <ButtonGroup
          radius="full"
          variant="bordered"
          size="sm"
          className="rounded-full border border-deep-blue-20"
        >
          {resourcesCategories.map((category, index) => (
            <Button
              key={index}
              className={`${
                activeTab === category.value && "bg-cyan-blue-30"
              } border-l border-deep-blue-20 text-sm  md:px-8 md:py-5`}
              onPress={() => handleCategoryClick(category.value)}
            >
              {category.name}
            </Button>
          ))}
        </ButtonGroup>

        {resources && resources.length > 0 ? (
          <div>
            {resources.map((resource, index) => (
              <BlogCard
                key={index}
                title={resource.fields.title}
                img={resource.fields.thumbnail.fields.file.url}
                category={resource.fields.category}
                description={
                  resource.fields.content.content[0].content[0].value
                }
                time={resource.fields.readTime}
                linkTo={`/blogs/${resource.fields.slug}`}
              />
            ))}
          </div>
        ) : (
          <div className="relative flex items-center justify-center text-midnight-blue rounded-xl h-96 w-full">
            This category is not availbable at the moment.
            <div className="absolute bottom-0 left-1/2 w-1/2 h-[1px] bg-ars-cyan -translate-x-1/2" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
