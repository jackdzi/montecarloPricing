set(SOURCES main.cpp montecarlo.cpp)

add_executable(montecarlo ${SOURCES})

# add_library(MyProjectLib ${SOURCES})

# If you have libraries to link against, do so here, e.g.:
# target_link_libraries(MyProject PRIVATE SomeLibrary)

target_include_directories(montecarlo PUBLIC "${PROJECT_SOURCE_DIR}/include")
