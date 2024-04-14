// authUtils.js

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function useAuthGmail() {
  const { data: session } = useSession();
  const [userImage, setUserImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (session?.user?.image) {
      setUserImage(session.user.image);
    } else {
      setUserImage(undefined);
    }
  }, [session]);

  // Exportar session y userImage por separado
  return { session, userImage };
}

// Exportar session y userImage individualmente
export { useSession as exportSession, useState as exportUserImage };