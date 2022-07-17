import React, { FC, useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
import ResumeHeaderComponent from './resumeHeaderComponent';
import ReferenceItemComponent from './referenceItemComponent';
import { IReferenceItem } from '@/lib/redux/actions/referenceAction';
import { Language } from '@/lib/helper/types';

type Props ={
  references:IReferenceItem[],
  lang:Language
}
const ReferenceComponent:FC<Props> = ({references,lang}) => {
  return (
    <>
      <div className="col-12">
      <ResumeHeaderComponent title={lang==="tr"?"Referans":"References"} icon="references" />
      <div className="col-12">
        {references.map((reference, index) => {
          return (
            <ReferenceItemComponent Item={reference} key={index + 20} />
          )
        })
        }
      </div>
    </div>
    </>
  )
}
export default ReferenceComponent