import React, { useState } from 'react';

export let isOpen= false;

export default function openModalWindow() {
  return !isOpen;
}