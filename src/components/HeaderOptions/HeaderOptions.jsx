"use client"
import Link from 'next/link';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


export const HeaderOptions = ({ options }) => {
    return (
      <ul className='d-flex justify-content-evenly w-100'>
        {options.map((option) => (
          <li
            key={option.id}
            className={`d-inline-block ${option.content.length > 0 ? 'pt-2' : 'pt-3'}`}
          >
            {option.content.length > 0 ? (
              <DropdownOption option={option} />
            ) : (
              <Link href={`/${option.href}`} style={{ textDecoration: 'none', color: 'black' }}>
                {option.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

const DropdownOption = ({ option }) => {
    console.log(option)
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" id={`dropdown-${option.id}`}>
                {option.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {option?.content?.map((subOption) => (
                    <Dropdown.Item key={subOption.department} href={`/departments/${subOption.href}`}>
                        {subOption.department}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

