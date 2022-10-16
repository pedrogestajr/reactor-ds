interface TextProps {
  size?: 'sm' | 'md' | 'lg'
}

export function Text({size = 'md'}: TextProps) {
    return(
      <span className="text-neutral-50 font-sans">Text</span>
    )
}