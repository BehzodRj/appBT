const authService = {
  logout: async (): Promise<void> => {
    try {
      // Ваша логика выхода из системы
      // Например, удаление токена аутентификации из localStorage
      localStorage.clear();
      window.location.href = '/login';
      console.log('Пользователь успешно вышел из системы');
    } catch (error) {
      console.error('Ошибка при выходе из системы', error);
    }
  }
};

export default authService;
