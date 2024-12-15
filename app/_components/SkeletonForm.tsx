import { Card, CardBody } from "@nextui-org/card"
import { Skeleton } from "@nextui-org/skeleton"
import { FC } from "react"

interface SkeletonFormProps {
  rows: number
}

const SkeletonForm: FC<SkeletonFormProps> = ({ rows }) => {
  return (
    <Card>
      <CardBody className="p-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 pb-10">
        {Array.from({ length: rows * 2 }).map((_, index) => (
          <Skeleton key={index} className="h-14 rounded-lg" />
        ))}
      </CardBody>
    </Card>
  )
}

export default SkeletonForm
