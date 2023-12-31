import Link from "next/link";

export default function ProjectButton({ styles }: { styles: string }) {
  return (
    <button type='button' className={styles}>
      <Link className='button_style' href='/projects'>
        View Projects
      </Link>
    </button>
  );
}
