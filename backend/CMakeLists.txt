cmake_minimum_required(VERSION 3.10)

project(montecarlo VERSION 1.0.0)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

include_directories("${PROJECT_SOURCE_DIR}/include")

add_subdirectory(src)

# add_executable(Driver driver.cpp)

# 6. Link the `src` target (if it were a library) - Optional
# target_link_libraries(Driver PRIVATE MyProjectLib)  # Only if src creates a library

# target_include_directories(Driver PUBLIC "${PROJECT_SOURCE_DIR}/include")
